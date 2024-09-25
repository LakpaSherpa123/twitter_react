import React, { useState, useEffect, useCallback } from "react";
import "./ShowPosition.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ShowPositions() {
  const [openPositions, setOpenPositions] = useState([]);
  const alpacaID = process.env.REACT_APP_ALPACA_API_ID;
  const alpacaSecret = process.env.REACT_APP_ALPACA_SECRET_KEY;
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentStock, setCurrentStock] = useState("");
  const [currentStockPrice, setCurrentStockPrice] = useState("");

  const location = useLocation();

  //Sell Button onClick -> make confirm comp visible & save stock info to state
  const handleClick = useCallback(
    (item) => {
      setShowConfirm(true);
      // You can access the item data here
      // console.log(item);
      setCurrentStock(item.symbol);
      setCurrentStockPrice(item.current_price);
    },
    [setShowConfirm]
  );

  //confirm com presponse -> THE main initiator for selling
  const handleConfirm = useCallback(
    (response) => {
      setShowConfirm(false);
      if (response) {
        alert("You clicked yes!");
        // Process The Sell Order with Rest of  AlpacaAPI
      } else {
        alert("You clicked no!");
      }
    },
    [setShowConfirm]
  );

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "APCA-API-KEY-ID": alpacaID,
      "APCA-API-SECRET-KEY": alpacaSecret,
    },
  };

  useEffect(() => {
    fetch("https://paper-api.alpaca.markets/v2/positions", options)
      .then((response) => response.json())
      .then((response) => {
        setOpenPositions(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {showConfirm && (
        <div className="confirm_box">
          <p>{currentStock}</p>
          <p>{currentStockPrice}</p>
          <p>Are you sure?</p>
          <p>At $1000 loss? It will come back up</p>
          <div className="confirm_buttons">
            <button onClick={() => handleConfirm(true)}>Yes</button>
            <button onClick={() => handleConfirm(false)}>No</button>
          </div>
        </div>
      )}
      <div className="section-title">
        <p className="open-positions">Open Positions</p>
        <Link
          to="/open-positions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {location.pathname !== "/open-positions" && (
            <p className="view-all">View all</p>
          )}
        </Link>
      </div>

      <div
        className={` ${
          location.pathname === "/open-positions"
            ? `pagePositionCont`
            : `positionCont`
        }`}
        // className="positionCont"
      >
        <div
          className={` ${
            location.pathname === "/open-positions" ? `pageItems` : `items`
          }`}
        >
          {openPositions.map((item) => (
            <div
              className={` ${
                location.pathname === "/open-positions" ? `pageTrade` : `trade`
              }`}
              key={item.symbol}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ra018iuzj1f-I213%3A3643%3B0%3A5166?alt=media&token=c1fb6eee-8e68-4825-ae87-728b5dc865aa"
                alt="Not Found"
                className="logo"
              />
              <div className="name-cont">
                <p className="ticker">{item.symbol}</p>
                <div className="names">
                  <p className="stock-name">{item.exchange}</p>
                </div>
              </div>
              <p className="price">${item.current_price}</p>
              <div className="gains-loss">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    className={`change-money${
                      item.unrealized_pl >= 0 ? "pos" : "neg"
                    }`}
                  >
                    <p>
                      {item.unrealized_pl >= 0 ? "+" : "-"}
                      {(item.current_price - item.avg_entry_price).toFixed(2)}
                    </p>
                  </div>
                  <p
                    className={`perc ${
                      item.unrealized_pl / item.cost_basis > 0
                        ? "positive"
                        : "negative"
                    }`}
                  >
                    {item.unrealized_pl / item.cost_basis >= 0 ? "+" : "-"}
                    {((item.unrealized_pl / item.cost_basis) * 100).toFixed(2)}%
                  </p>
                </div>
                <div className="positionSell" onClick={() => handleClick(item)}>
                  X
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowPositions;

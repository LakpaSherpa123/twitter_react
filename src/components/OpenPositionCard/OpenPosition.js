import React, { useState, useEffect } from "react";
import "./OpenPosition.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function OpenPosition() {
  const [openPositions, setOpenPositions] = useState([]);
  const alpacaID = process.env.REACT_APP_ALPACA_API_ID;
  const alpacaSecret = process.env.REACT_APP_ALPACA_SECRET_KEY;

  const location = useLocation();

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
    // <Link to={page.path}
    //style={{ textDecoration: "none", color: "inherit" }}
    //></Link>
    <>
      <div className="section-title">
        <p className="open-positions">Open Positions</p>
        <Link
          to="/current-trade"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {location.pathname !== "/current-trade" && (
            <p className="view-all">View all</p>
          )}
        </Link>
      </div>
      <div className="positionCont">
        <div className="items">
          {openPositions.map((item) => (
            <div className="trade" key={item.symbol}>
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OpenPosition;

{
  /* <div className="trade">
  <img
    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ra018iuzj1f-I213%3A3644%3B0%3A5178?alt=media&token=b9f6479d-3297-4cc6-a0f3-bcb486915386"
    alt="Not Found"
    className="logo"
  />
  <div className="name-cont">
    <p className="ticker">{stocks[0].ticker}</p>
    <div className="names">
      <p className="stock-name">{stocks[0].stockName}</p>
    </div>
  </div>
  <p className="price">{stocks[0].price}</p>
  <div className="gains-loss">
    <div className="change-money clip-contents">
      <p className="money">{stocks[0].money}</p>
    </div>
    <p className="perc">{stocks[0].perc}</p>
  </div>
</div>; */
}

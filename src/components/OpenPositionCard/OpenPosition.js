import React, { useState, useEffect } from "react";
import "./OpenPosition.css";
import axios from "axios";

function OpenPosition() {
  const [openPositions, setOpenPositions] = useState([]);
  const alpacaID = process.env.REACT_APP_ALPACA_API_ID;
  const alpacaSecret = process.env.REACT_APP_ALPACA_SECRET_KEY;

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
      <div className="section-title">
        <p className="open-positions">Open Positions</p>
        <p className="view-all">View all</p>
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
              <p className="price">{item.current_price}</p>
              <div className="gains-loss">
                <div className="change-money clip-contents">
                  <p className="money">{item.unrealized_intraday_pl}</p>
                </div>
                <p className="perc">{item.qty}</p>
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

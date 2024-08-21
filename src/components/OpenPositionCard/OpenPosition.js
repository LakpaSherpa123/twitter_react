import React from "react";
import "./OpenPosition.css";

function OpenPosition({ stocks }) {
  return (
    <>
      <div className="section-title">
        <p className="open-positions">Open Positions</p>
        <p className="view-all">View all</p>
      </div>
      <div className="positionCont">
        <div className="items">
          <div className="trade">
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
          </div>
          <div className="trade">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ra018iuzj1f-I213%3A3643%3B0%3A5166?alt=media&token=c1fb6eee-8e68-4825-ae87-728b5dc865aa"
              alt="Not Found"
              className="logo"
            />
            <div className="name-cont">
              <p className="ticker">{stocks[1].ticker}</p>
              <div className="names">
                <p className="stock-name">{stocks[1].stockName}</p>
              </div>
            </div>
            <p className="price">{stocks[1].price}</p>
            <div className="gains-loss">
              <div className="change-money clip-contents">
                <p className="money">{stocks[1].money}</p>
              </div>
              <p className="perc">{stocks[1].perc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenPosition;

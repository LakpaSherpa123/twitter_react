import React from "react";
import "./OrderHistoryCard.css";
import { useEffect, useState } from "react";
import TwitterAlert from "../TwitterAlertCard/TwitterAlert";

function OrderHistoryCard({ stock, tweet }) {
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

  const TweetShow = () => {
    return (
      <div
        style={{
          width: "100%",
          marginTop: "0.5rem",
          fontSize: "12px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <p style={{ fontWeight: "700" }}>{tweet.name}</p>
        <p style={{ marginBottom: "0.5rem" }}>" {tweet.text} "</p>
      </div>
    );
  };
  return (
    <div className="CCContainer">
      <div className="orderContainer">
        {/* <div className="historyTweet">{tweet ? <TweetShow /> : null}</div> */}
        <TwitterAlert tweet={tweet.text} />
        <div className="orderHead">
          <p className="orderName">
            {stock.ticker} <span>({stock.stockName})</span>
          </p>
          <p className="orderDate">{stock.stockDate}</p>
        </div>
        <div className="orderImgPrice">
          <img src={stock.imgUrl} alt="Not Found" className="company-logo" />
          <p className="orderPrice">{stock.price}</p>
        </div>
        <div className="moneypercentage">
          <div className="change-money clip-contents">
            <p className="dollarChange">{stock.money}</p>
          </div>
          <p className="percChange">{stock.perc}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryCard;

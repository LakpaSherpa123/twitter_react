import React from "react";
import "./OrderHistoryCard.css";

function OrderHistoryCard({ stock, tweet }) {
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
        <div className="historyTweet">{tweet ? <TweetShow /> : null}</div>
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

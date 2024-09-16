import React from "react";
import OrderHistoryCard from "./OrderHistoryCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ShowHistory() {
  const location = useLocation();

  const tweet = {
    name: "Tsering Pemba",
    text: "#ALERT BTO $SPY 8/22 559P 2.02 #SWING VERY HIGH RISK, only light size! Space to add once if we pop again Follow at your OWN RISK!",
  };
  const history = [
    {
      ticker: "FB",
      stockName: "Facebook, Inc",
      stockDate: "Jan 25, 09:23pm",
      price: "$360",
      money: "+$2.16",
      perc: "0.59%",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ra018iuzj1f-I213%3A3644%3B0%3A5178?alt=media&token=b9f6479d-3297-4cc6-a0f3-bcb486915386",
    },
    {
      ticker: "AAPL",
      stockName: "Apple",
      stockDate: "Jan 15, 10:23am",
      price: "$145",
      money: "-$0.090",
      perc: "0.49%",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ra018iuzj1f-I213%3A3643%3B0%3A5166?alt=media&token=c1fb6eee-8e68-4825-ae87-728b5dc865aa",
    },
    {
      ticker: "SPT",
      stockName: "Spotify",
      stockDate: "Jan 5, 10:23am",
      price: "$10",
      money: "-$0.90",
      perc: "2.49%",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/65lpc9p4aw9-221%3A3594?alt=media&token=145e373b-34f8-4bfd-9a7a-88dfee2cb3de",
    },
  ];
  return (
    <div style={{ marginBottom: "4rem" }}>
      {/* <h2 style={{ color: "#fff", marginTop: "2rem" }}>Order History</h2> */}
      <div
        className="section-title"
        // style={{ display: "flex", width: "50%", justifyContent: "flex-end" }}
      >
        <p className="open-positions">Order History</p>
        <Link
          to="/order-history"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {location.pathname !== "/order-history" && (
            <p className="view-all">View all</p>
          )}
        </Link>{" "}
      </div>
      {history.map((stock, index) => (
        <OrderHistoryCard key={index} stock={stock} tweet={tweet} />
      ))}
    </div>
  );
}

export default ShowHistory;

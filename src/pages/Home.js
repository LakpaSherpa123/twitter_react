import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
// import TestConnection from "../components/TestConnection";
import TwitterAlert from "../components/TwitterAlertCard/TwitterAlert";
import OpenPosition from "../components/OpenPositionCard/OpenPosition";
import ShowHistory from "../components/OrderHistoryCard/ShowHistory";
import SimpleMenu from "../components/ResponsiveAppBar";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Home = () => {
  const [tweet, setTweet] = useState("");
  //temp Current Position data
  const stocks = [
    {
      ticker: "FB",
      stockName: "Facebook, Inc",
      price: "$360",
      money: "+$2.16",
      perc: "0.59%",
    },
    {
      ticker: "AAPL",
      stockName: "Apple",
      price: "$145",
      money: "-$0.090",
      perc: "0.49%",
    },
  ];

  // fetch tweet alert  from backend API
  const GetTweets = () => {
    setTweet(
      `#ALERT BTO $SPY 8/22 559P 2.02 #SWING VERY HIGH RISK, only light size! Space to add once if we pop again Follow at your OWN RISK!`
    );
  };
  //run once when it laods
  useEffect(() => {
    GetTweets();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <TestConnection /> */}
      <ResponsiveAppBar />
      <TwitterAlert tweet={tweet} />
      <OpenPosition stocks={stocks} />
      <ShowHistory />
    </div>
  );
};
export default Home;

import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
// import TestConnection from "../components/TestConnection";
import TwitterAlert from "../components/TwitterAlert";

const Home = () => {
  const [tweet, setTweet] = useState("");

  // fetch tweet alert  from backend API
  const GetTweets = () => {
    console.log("first");
    setTweet(
      `#ALERT BTO $SPY 8/22 559P 2.02 #SWING VERY HIGH RISK, only light size! Space to add once if we pop again Follow at your OWN RISK!`
    );
  };
  useEffect(() => {
    GetTweets();
  }, []);

  console.log(tweet);
  return (
    <div>
      <Navbar />
      {/* <TestConnection /> */}
      <TwitterAlert tweet={tweet} />
    </div>
  );
};
export default Home;

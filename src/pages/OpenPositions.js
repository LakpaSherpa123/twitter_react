import React from "react";
import OpenPositionCard from "../components/OpenPositionCard/ShowPositions";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function CurrentTrades() {
  return (
    <div>
      <ResponsiveAppBar />
      <OpenPositionCard />
    </div>
  );
}

export default CurrentTrades;

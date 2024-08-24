import React from "react";
import OpenPosition from "../components/OpenPositionCard/OpenPosition";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function CurrentTrades() {
  return (
    <div>
      <ResponsiveAppBar />
      <OpenPosition />
    </div>
  );
}

export default CurrentTrades;

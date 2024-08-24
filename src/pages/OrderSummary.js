import React from "react";
import ShowHistory from "../components/OrderHistoryCard/ShowHistory";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function OrderSummary() {
  return (
    <div>
      <ResponsiveAppBar />
      <ShowHistory />
    </div>
  );
}

export default OrderSummary;

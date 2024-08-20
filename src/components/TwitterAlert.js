import React from "react";
import "./Twitter.css";

function TwitterAlert({ tweet }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        marginTop: "3rem",
      }}
    >
      <div className="total-balance">
        <p className="twitter-text-string">{tweet}</p>
      </div>
    </div>
  );
}

export default TwitterAlert;

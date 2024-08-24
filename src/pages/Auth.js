import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import AuthConfig from "./AuthConfig";
import AlpacaConfig from "./AlpacaConfig";

function Auth() {
  return (
    <div>
      <ResponsiveAppBar />

      <AuthConfig />
      <AlpacaConfig />
    </div>
  );
}

export default Auth;

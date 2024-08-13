import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { useForm } from "react-hook-form";
import "../components/form.css";
import { authAlpaca } from "../services/api";

function AlpacaConfig() {
  const [message, setMessage] = useState("Fill the Authentication Form!");
  const [placedOrder, setPlacedOrder] = useState("");
  const [authFormToggle, setAuthFormToggle] = useState(false);
  const [orderToggle, setOrderToggle] = useState(false);

  //Shows or Hides the Forms
  const ToggleAuthForm = () => {
    setAuthFormToggle(!authFormToggle);
  };
  const ToggleOrderForm = () => {
    setOrderToggle(!orderToggle);
  };

  // Create separate useForm instances for each form
  const authForm = useForm();
  const orderForm = useForm();

  //Submit button for Auth FOrm
  const onSubmitAuth = (data) => {
    console.log(data);
    setMessage("You are Authenticated!");
    setOrderToggle(true);
    ToggleAuthForm();

    //RUN THE Auth Function from server api
  };

  //Submit button for Order Form
  const onSubmitOrder = (data) => {
    console.log(data);
    setMessage("Your Order was Filled!");
    setPlacedOrder(data);
    //RUN THE Order Fill Function from server api
  };

  return (
    <div>
      <Navbar />
      <p style={{ paddingTop: "50px" }}></p>
      <p style={{ color: "white", fontSize: "1.3rem" }}>{message}</p>
      {/* Authentication Toogle Button */}
      <h2
        className={`formHead ${authFormToggle ? "collapsed" : "expanded"}`}
        onClick={ToggleAuthForm}
      >
        Authentication Form
      </h2>
      {/* Alpaca Authentication Form */}
      {authFormToggle ? (
        <form onSubmit={authForm.handleSubmit(onSubmitAuth)}>
          <label for="blank" class="text-indicator no_marg">
            Client ID
          </label>
          <input defaultValue="" {...authForm.register("client_id")} />

          <label for="blank" class="text-indicator no_marg">
            CLIENT SECRET
          </label>
          <input defaultValue="" {...authForm.register("client_secret")} />

          <label for="blank" class="text-indicator no_marg">
            REDIRECT URI
          </label>
          <input defaultValue="" {...authForm.register("redirect_uri")} />

          <input type="submit" value={"Authenticate"} />
        </form>
      ) : null}

      {/* Toggle Order Form */}
      <h2
        className={`formHead ${orderToggle ? "collapsed" : "expanded"}`}
        style={{ marginTop: "3rem" }}
        onClick={ToggleOrderForm}
      >
        Place Order
      </h2>
      {/* Placing Order Form */}
      {orderToggle ? (
        <>
          <form onSubmit={orderForm.handleSubmit(onSubmitOrder)}>
            <label for="blank" class="text-indicator no_marg">
              Symbol
            </label>
            <input defaultValue="" {...orderForm.register("symbol")} />

            <label for="blank" class="text-indicator no_marg">
              Quantity
            </label>
            <input defaultValue="" {...orderForm.register("qty")} />

            <label for="blank" class="text-indicator no_marg">
              Side
            </label>
            <input defaultValue="" {...orderForm.register("side")} />
            <label for="blank" class="text-indicator no_marg">
              Market
            </label>
            <input defaultValue="" {...orderForm.register("market")} />
            <label for="blank" class="text-indicator no_marg">
              Time In Force
            </label>
            <input defaultValue="" {...orderForm.register("timeInForce")} />

            <input type="submit" value={"Place Order"} />
          </form>

          {/* DISPLAYING THE FILLED Order */}
          <div
            style={{ width: "30%", margin: "auto", backgroundColor: "white" }}
          >
            <p
              style={{
                color: "gray",
                fontSize: "16px",
                textAlign: "left",
                paddingLeft: "1rem",
              }}
            >
              {JSON.stringify(placedOrder, null, 2)
                .replace(/"/g, "")
                .replace(/:/g, ": ")
                .split(",")
                .map((line, index) => (
                  <div key={index}>{line} </div>
                ))}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default AlpacaConfig;

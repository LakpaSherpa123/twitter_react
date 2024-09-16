import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { useForm } from "react-hook-form";
import "../components/form.css";
import { authTwitterPck } from "../services/api";

function AuthConfig() {
  const [message, setMessage] = useState("Fill the Authentication Form!");

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setMessage("You are Authenticated!");
    authTwitterPck();
  };

  return (
    <div className="AuthForm">
      <h2 style={{ color: "#fff", marginTop: "4rem" }}>
        Twitter Authentication
      </h2>

      <p style={{ color: "white", fontSize: "1rem" }}>{message}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label for="username" class="text-indicator no_marg">
          Consumer Key
        </label>
        <input defaultValue="" {...register("consumer_key")} />

        <label for="username" class="text-indicator no_marg">
          Consumer Secret
        </label>
        <input defaultValue="" {...register("consumer_secret")} />

        <label for="username" class="text-indicator no_marg">
          Client Id
        </label>
        <input defaultValue="" {...register("client_id")} />

        <label for="username" class="text-indicator no_marg">
          Client Secret
        </label>
        <input defaultValue="" {...register("client_secret")} />

        <label for="username" class="text-indicator no_marg">
          Redirect URI
        </label>
        <input defaultValue="" {...register("redirect_Url")} />

        <input type="submit" value={"SAVE"} />
      </form>
    </div>
  );
}

export default AuthConfig;

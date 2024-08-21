import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const API_URL = "http://localhost:8080/api/login";

      const res = await axios.post(API_URL, data);
      console.log(res.data);
      console.log(res.status);
      // navigate("/");
      if(res.status === 200)
        navigate("/");
      else
        console.log(res.body);
    } catch (error) {
      setLoginError(true);
      console.error("Error", error);
    }
  };

  return (
    <div className="loginCont">
      <p style={{ paddingTop: "50px" }}></p>
      <h2>Login</h2>
      {loginError ?
          <p className="error-message">Invalid Username or Password</p> : null
        }

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label for="username" class="text-indicator no_marg">
          username
        </label>
        <input
          defaultValue=""
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
        />
        {errors.username && (
          <p className="error-message">{errors.username.message}</p>
        )}

        <label for="username" class="text-indicator no_marg">
          password
        </label>
        <input
          defaultValue="" type = "password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        <input type="submit" value={"Login"} />
        <Link to="/register">
          <span>Sign up?</span>
        </Link>
      </form>
    </div>
  );
}

export default Login;

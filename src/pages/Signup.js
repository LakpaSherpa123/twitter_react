import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const API_URL = "http://localhost:8080/api/signup";

      const res = await axios.post(API_URL, data);
      console.log(res.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="loginCont">
      <p style={{ paddingTop: "50px" }}></p>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <label for="name" class="text-indicator no_marg">
          Name
        </label>
        <input
          defaultValue=""
          {...register("fullName", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
        />
        {errors.fullName && (
          <p className="error-message">{errors.fullName.message}</p>
        )}
        {/* username */}

        <label for="username" class="text-indicator no_marg">
          Username
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
        {/* password */}
        <label for="password" class="text-indicator no_marg">
          Password
        </label>
        <input
          defaultValue=""
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

        <input type="submit" value={"Signup"} />
        <Link to="/login">
          <span>Back to Login</span>
        </Link>
      </form>
    </div>
  );
}

export default Signup;

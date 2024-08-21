import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="loginCont">
      <p style={{ paddingTop: "50px" }}></p>
      <h2>Login</h2>

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

        <input type="submit" value={"Login"} />
        <Link to="/register">
          <span>Sign up?</span>
        </Link>
      </form>
    </div>
  );
}

export default Login;

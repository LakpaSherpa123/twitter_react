import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./form.css";

const TestConnection = () => {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    postTweet(data.tweet);
    setMessage(data.tweet);
  };

  const testConnection = async () => {
    try {
      const API_URL = "http://localhost:8080/api/data";
      const res = await axios.get(API_URL);

      console.log(res);
      setMessage(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 

  const postTweet = async (x) => {
    try {
      const API_URL = "http://localhost:8080/api/tweet";

      const res = await axios.post(API_URL, x, {
        headers: { "Content-Type": "text/plain" },
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
        <p style={{paddingTop:"50px"}}></p>
      <p>{message.tweet}</p>
      <button onClick={testConnection}>Test Connection</button>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="" {...register("tweet")} />
          <input type="submit" value={"tweet"} />
        </form>
      </div>
    </div>
  );
};

export default TestConnection;

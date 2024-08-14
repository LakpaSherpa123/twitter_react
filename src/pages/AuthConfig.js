import React from "react";
import Navbar from "../layout/Navbar";
import { useForm } from "react-hook-form";
import "../components/form.css";
import { authTwitterPck } from "../services/api";


function AuthConfig() {
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        authTwitterPck();   
      
      };

      
  return (
    <div>
      <Navbar />
      <p style={{paddingTop:"50px"}}></p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label for="username" class="text-indicator no_marg">Consumer Key</label>
          <input defaultValue="consumer_key" {...register("consumer_key")} />

          <label for="username" class="text-indicator no_marg">Consumer Secret</label>
          <input defaultValue="" {...register("consumer_secret")} />

          <label for="username" class="text-indicator no_marg">Client Id</label>
          <input defaultValue="" {...register("client_id")} />

          <label for="username" class="text-indicator no_marg">Client Secret</label>
          <input defaultValue="" {...register("client_secret")} />

          <label for="username" class="text-indicator no_marg">Redirect URI</label>
          <input defaultValue="" {...register("redirect_Url")} />

          <label for="username" class="text-indicator no_marg">Tweet</label>
          <input defaultValue="" {...register("tweet")} />
          
          <input type="submit" value={"Authenticate"} />
        </form>
      </div>
    
  );
}

export default AuthConfig;

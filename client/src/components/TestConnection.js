import React, { useState } from 'react';
import axios from 'axios';

const TestConnection = () => {
    const [message, setMessage] = useState('');

    const testConnection = async ()=>{
        try {

            const API_URL = 'http://localhost:8080/api/data';
            const res =  await axios.get(API_URL);
     
            console.log(res);
           setMessage(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const authentication = async () => {
        try{
        const API_URL = 'http://localhost:8080/api/test';

        const res = await axios.get(API_URL);
        console.log(res.data);
       

        
        // const res1 = await axios.get("http://localhost:8080/api/callback");
        // console.log(res1)

        } catch(error){
            console.error('Error', error);
        }

    }

    const postTweet = async () => {
        

        try{
            const API_URL = 'http://localhost:8080/api/tweet';
    
            const res = await axios.post(API_URL,"This is from front end", {headers: {'Content-Type': 'text/plain'}}); 
            console.log(res.data);
           
    
            
            } catch(error){
                console.error('Error', error);
            }
    }

    return (
        <div>
            <button onClick={testConnection}>Test Connection</button> 
            <button onClick={authentication}>Aunthenticate Twitter</button>
            <button onClick={postTweet}>Post Tweets</button>
            <p>{message}</p>
        </div>
    );
};

export default TestConnection;

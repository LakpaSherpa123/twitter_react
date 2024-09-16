import React from "react";
import "./TwitterAlert.css";

function TwitterAlert({ tweet }) {
  return (
    <>
      {/* <div className="section-title">
        <p className="twitterAlert">Twitter Alert</p>
      </div> */}
      <div className="tweetCont">
        <div className="tweets">
          <div className="group-851">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/o40ge0cz9o-213%3A3831?alt=media&token=f5af78d7-de35-4e33-a384-24cedba3b88e"
              alt="Not Found"
              className="image"
            />
            <div className="text">
              <div className="names">
                <p className="name">Name</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/o40ge0cz9o-213%3A3842?alt=media&token=9ca1283b-a43f-43f9-aa16-85d7b896a448"
                  alt="Not Found"
                  className="vector"
                />
                <p className="username">@username</p>
                <p className="date">Jul 17</p>
              </div>
              <p className="mainTweet">{tweet}</p>
              {/* <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/o40ge0cz9o-213%3A3832?alt=media&token=1667813e-2380-47b5-a247-435ac9984556"
                alt="Not Found"
                className="icons"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwitterAlert;

import React from "react";
import trailer from "../../assets/trailer3.mp4";
import logo from "../../assets/simplex2.png";
import "./Login.css";

import SignInGoogle from "../SignIn/SignInGoogle";

const Login = () => {
  return (
    <div className="box">
      <div className="for-video">
        <video
          src={trailer}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="video"
        />
      </div>
      <div className="centered">
        <div className="logo-login">
          <div>
            <img src={logo} alt="logo" width={300} />
          </div>
          <div>
            <SignInGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
import trailer from "../../assets/trailer2.mp4";
// import logo from "../../assets/logo.png";

import "./Login.css";

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
      <div>{/*  min 45  */}</div>
    </div>
  );
};

export default Login;

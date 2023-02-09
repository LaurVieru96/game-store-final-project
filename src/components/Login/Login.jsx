import React from "react";
// import { useNavigate } from "react-router-dom";
import trailer from "../../assets/trailer3.mp4";
import logo from "../../assets/simplex2.png";
import { GoogleLogin } from "@react-oauth/google";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
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
            <GoogleLogin
              onSuccess={(response) => {
                localStorage.setItem("user", JSON.stringify(response));
                navigate("/");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

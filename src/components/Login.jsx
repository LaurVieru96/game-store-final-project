import React from "react";
// import { useEffect, useState } from "react";
import trailer from "../assets/trailer3.mp4";
import logo from "../assets/simplex2.png";
import "./Login.css";
// import { FcGoogle } from "react-icons/fc";
// import { auth, provider } from "../service/config";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router";
// import Home from "../container/Home";
// import { signInWithGoogle } from "../service/config";
import SignInGoogle from "./SignIn/SignInGoogle";

const Login = () => {
  // const navigate = useNavigate();
  // const [value, setValue] = useState("");

  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     console.log(data);
  //     setValue(data.user.email);
  //     localStorage.setItem("email", data.user.email);
  //     localStorage.setItem("name", data.user.displayName);
  //     localStorage.setItem("photo", data.user.photoURL);
  //     console.log(data);

  //     const { email, displayName, photoURL } = data.user;
  //   });
  // };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // }, []);

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

            {/* <button
              style={{
                alignItems: "center",
                display: "flex",
                cursor: "pointer",
                padding: "10px",
                border: "none",
                borderRadius: "12px",
              }}
              onClick={signInWithGoogle}
            >
              <FcGoogle style={{ marginRight: "5px", fontSize: "25px" }} />{" "}
              Signin With Google
            </button> */}

            {/* {value ? (
              <Home userDet={value} />
            ) : (
              <button
                style={{
                  alignItems: "center",
                  display: "flex",
                  cursor: "pointer",
                  padding: "10px",
                  border: "none",
                  borderRadius: "12px",
                }}
                onClick={handleClick}
              >
                <FcGoogle style={{ marginRight: "5px", fontSize: "25px" }} />{" "}
                Signin With Google
              </button>
            )} */}

            {/* {value ? (
              navigate("/home")
            ) : (
              <button onClick={handleClick}>Signin With Google</button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

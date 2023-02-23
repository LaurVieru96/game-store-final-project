import React from "react";
import "./Home.css";
import { auth } from "../../service/config";
import NavigationBar from "../NavigationBar/NavigationBar";

const Home = ({ user }) => {
  return (
    <div className="home">
      <NavigationBar user={user} />
      <div className="bg">
        <div className="home-second">
          <h1>
            Hello,
            <br />
            <i>
              <span>{user.displayName}</span>
            </i>
          </h1>
          <img style={{ color: "#fff" }} src={user.photoURL} alt="Profile" />
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

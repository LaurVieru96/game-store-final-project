import React from "react";
import "./Home.css";
import { auth } from "../service/config";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Home = ({ user }) => {
  // https://rapidapi.com/digiwalls/api/gamerpower/
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "77eca41c4amsh7468f3f675936f6p17f94bjsnd0515102dbe1",
  //     "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  //   },
  // };

  // fetch("https://gamerpower.p.rapidapi.com/api/giveaways", options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

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
          <img src={user.photoURL} alt="profile-pic" />
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

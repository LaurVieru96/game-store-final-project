import React from "react";
import "./Home.css";
import { auth } from "../service/config";

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
      ' NAVBAR HERE '
      <h1>
        Hello,
        <span>{user.displayName}</span>
      </h1>
      <img src={user.photoURL} alt="profile-pic" />
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;

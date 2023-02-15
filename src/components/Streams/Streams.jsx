import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

const Streams = ({ user }) => {
  return (
    <div>
      <NavigationBar user={user} />
      <h1>Streams</h1>

      <iframe
        title="asdasd"
        src="https://player.twitch.tv/?channel=dallas&parent=streamernews.example.com&muted=true"
        height="720"
        width="1280"
        allowfullscreen
      ></iframe>
    </div>
  );
};


export default Streams;

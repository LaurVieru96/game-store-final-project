import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Support.css";
const Support = ({ user }) => {
  return (
    <div className="support-container">
      <NavigationBar user={user} />
      <h1>Support</h1>
    </div>
  );
};

export default Support;

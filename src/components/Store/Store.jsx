import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Store.css";

const Store = ({ user }) => {
  return (
    <div>
      <NavigationBar user={user} />
      <div className="store">
        <h1>STORE</h1>
      </div>
    </div>
  );
};

export default Store;

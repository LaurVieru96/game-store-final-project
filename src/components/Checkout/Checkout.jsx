import React from "react";
import "./Checkout.css";
import NavigationBar from "../NavigationBar/NavigationBar";

const Checkout = ({ user }) => {
  return (
    <div className="checkout-container">
      <NavigationBar user={user} />
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;

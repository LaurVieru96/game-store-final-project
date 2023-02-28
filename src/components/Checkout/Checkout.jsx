import React from "react";
import "./Checkout.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Checkout = ({ user }) => {
  const cartItems = useSelector((state) => state.cart.cartList);
  console.log(cartItems);

  return (
    <div className="checkout-container">
      <NavigationBar user={user} />
      <h1>Checkout</h1>

      <div>
        <Card style={{ width: "50rem" }}>
          <ListGroup variant="flush">
            {cartItems.map((individualCart, i) => (
              <ListGroup.Item>
                <div key={i}>
                  <div>
                    <img src={individualCart.image} alt="" width={200} />
                    <h3>{individualCart.title}</h3>
                  </div>
                  <div>
                    <div>
                      <button>-</button>
                    </div>
                    <div>
                      <p>Quantity: 1</p>
                    </div>

                    <div>
                      <button>+</button>
                    </div>
                    <h6>{individualCart.price}</h6>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default Checkout;

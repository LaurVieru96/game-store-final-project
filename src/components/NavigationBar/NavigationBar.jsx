import React, { useState } from "react";
import logo from "../../assets/logo3.png";
import "./NavigationBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { favoritesActions } from "../../store/favorites-slice";
import { cartActions } from "../../store/cart-Slice";

const NavigationBar = ({ user }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const closeWallet = () => setShow(false);
  const showWallet = () => setShow(true);

  const [showF, setShowF] = useState(false);

  const closeFav = () => setShowF(false);
  const showFav = () => setShowF(true);

  const [showC, setShowC] = useState(false);

  const closeCart = () => setShowC(false);
  const showCart = () => setShowC(true);

  const favoritesItems = useSelector((state) => state.favorites.favoritesList);

  console.log(favoritesItems);

  const removeItem = (id) => {
    dispatch(favoritesActions.removeFromFavorites(id));
  };

  const cartItems = useSelector((state) => state.cart.cartList);
  console.log(cartItems);

  // const price = "$4.99";
  // const number = parseFloat(price.replace("$", "")); // numar = 4.99

  const calculateTotal = () => {
    let total = 0;
    for (let item of cartItems) {
      const price = parseFloat(item.price.replace("$", ""));
      total += price;
    }
    return total.toFixed(2);
  };

  const totalPrice = calculateTotal();

  const removeFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <Link to="/home">
          <img src={logo} width="170" height="50" alt="Logo-Website" />
        </Link>
      </div>

      <div className="navigation-nav">
        <ul>
          <li>
            <Link
              to="/home"
              className={`underline ${
                window.location.pathname === "/home" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "#FB8122" }}
              to="/store"
              className={`underline ${
                window.location.pathname === "/store" ? "active" : ""
              }`}
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              to="/streams"
              className={`underline ${
                window.location.pathname === "/streams" ? "active" : ""
              }`}
            >
              Streams
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className={`underline ${
                window.location.pathname === "/support" ? "active" : ""
              }`}
            >
              Support
            </Link>
          </li>
        </ul>
      </div>

      <div className="navigation-user">
        {window.location.pathname === "/store" && (
          <>
            <button onClick={showCart}>
              <AiOutlineShoppingCart />
            </button>
            <Modal show={showC} onHide={closeCart}>
              <Modal.Header>
                <Modal.Title style={{ color: "#fc8b33" }}>Cart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  {cartItems.length > 0 ? (
                    <ul className="myBgColor list-group">
                      {cartItems.map((item) => {
                        return (
                          <li
                            className="d-flex justify-content-between myColor list-group-item"
                            key={item.id}
                          >
                            <img
                              src={item.image}
                              alt="asd"
                              width={200}
                              style={{ marginRight: "15px" }}
                            />
                            {item.title}
                            <br />
                            {item.price}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="btn myBtn btn-warning"
                            >
                              x
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p>No games have been added to your cart.</p>
                  )}
                </div>
              </Modal.Body>
              <Modal.Body style={{ color: "#fc8b33" }}>
                Total Price: <b>$ {totalPrice}</b>
              </Modal.Body>
              <Modal.Body style={{ color: "#fc8b33" }}>
                Cart and payment.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="checkout-btn"
                  style={{
                    backgroundColor: "#fc8b33",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  <Link className="checkout-btn-main" to="/checkout">
                    Checkout
                  </Link>
                </Button>
              </Modal.Footer>
            </Modal>

            <button onClick={showWallet}>
              <IoWalletOutline />
            </button>
            <Modal show={show} onHide={closeWallet}>
              <Modal.Header>
                <Modal.Title style={{ color: "#FB8122" }}>
                  Your wallet
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Account ballance: $1.276,93</Modal.Body>
              <Modal.Footer>
                <Button
                  style={{ backgroundColor: "#fc8b33" }}
                  className="text-light"
                  variant="warning"
                  onClick={closeWallet}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <button onClick={showFav}>
              <MdFavoriteBorder />
            </button>
            <Modal show={showF} onHide={closeFav}>
              <Modal.Header>
                <Modal.Title style={{ color: "#fc8b33" }}>
                  Favorites Games List
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  {favoritesItems.length > 0 ? (
                    <ul className="myBgColor list-group">
                      {favoritesItems.map((item) => {
                        return (
                          <li
                            className="d-flex justify-content-between myColor list-group-item"
                            key={item.id}
                            style={{ border: "1px solid #fff" }}
                          >
                            {item.title} - {item.price}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="btn myBtn btn-warning"
                            >
                              x
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p>No games have been added to favorites.</p>
                  )}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{ backgroundColor: "#fc8b33" }}
                  className="text-light"
                  variant="warning"
                  onClick={closeFav}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}

        <img
          style={{ color: "#fff" }}
          src={user.photoURL}
          width="50"
          height="50"
          alt="Profile"
          className="profile-pic-navbar"
        />
      </div>
    </div>
  );
};

export default NavigationBar;

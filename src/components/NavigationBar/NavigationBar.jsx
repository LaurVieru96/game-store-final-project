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

const NavigationBar = ({ user }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const closeWallet = () => setShow(false);
  const showWallet = () => setShow(true);

  const [showF, setShowF] = useState(false);

  const closeFav = () => setShowF(false);
  const showFav = () => setShowF(true);

  const favoritesItems = useSelector((state) => state.favorites.favoritesList);
  console.log(favoritesItems);

  const removeItem = () => {
    dispatch(favoritesActions.removeFromFavorites(favoritesItems.id));
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
        <button>
          <AiOutlineShoppingCart />
        </button>

        <button onClick={showWallet}>
          <IoWalletOutline />
        </button>
        <Modal show={show} onHide={closeWallet}>
          <Modal.Header>
            <Modal.Title style={{ color: "#FB8122" }}>Your wallet</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "#FB8122" }}>
            Account ballance: $1.276,93
          </Modal.Body>
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
              <ul className="myBgColor list-group">
                {favoritesItems.map((item) => {
                  return (
                    <li
                      className="d-flex justify-content-between myColor list-group-item"
                      key={item.id}
                    >
                      {item.title} - {item.price}
                      <button
                        onClick={removeItem}
                        className="btn myBtn btn-warning"
                      >
                        x
                      </button>
                    </li>
                  );
                })}
              </ul>
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

        <img src={user.photoURL} width="50" height="50" alt="Profile-Pic" />
      </div>
    </div>
  );
};

export default NavigationBar;

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo3.png";
import Container from "react-bootstrap/Container";
import "./NavigationBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const NavigationBar = ({ user }) => {
  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <img src={logo} width="170" height="50" alt="Logo-Website" />
      </div>
      <div className="navigation-nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/store">Game Store</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </div>
      <div className="navigation-user">
        <button>
          <AiOutlineShoppingCart />
        </button>
        <button>
          <IoWalletOutline />
        </button>
        <button>
          <MdFavoriteBorder />
        </button>
        <img src={user.photoURL} width="50" height="50" alt="Profile-Pic" />
      </div>
    </div>
  );
};

export default NavigationBar;

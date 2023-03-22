// import React, { useRef, useState } from "react";
// import logo from "../../assets/logo3.png";
// import "./NavigationBar.css";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { IoWalletOutline } from "react-icons/io5";
// import { MdFavoriteBorder } from "react-icons/md";
// import { Link } from "react-router-dom";

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { favoritesActions } from "../../store/favorites-slice";
// import { cartActions } from "../../store/cart-Slice";

// import Badge from "react-bootstrap/Badge";

// const NavigationBar = ({ user }) => {
//   const dispatch = useDispatch();
//   const removeItem = (id) => {
//     dispatch(favoritesActions.removeFromFavorites(id));
//   };
//   const removeFromCart = (id) => {
//     dispatch(cartActions.removeFromCart(id));
//   };

//   const [show, setShow] = useState(false);

//   const closeWallet = () => setShow(false);
//   const showWallet = () =>
//     setTimeout(() => {
//       setShow(true);
//     }, 300);

//   const [showF, setShowF] = useState(false);

//   const closeFav = () => setShowF(false);
//   const showFav = () =>
//     setTimeout(() => {
//       setShowF(true);
//     }, 300);

//   const [showC, setShowC] = useState(false);

//   const closeCart = () => setShowC(false);
//   const showCart = () =>
//     setTimeout(() => {
//       setShowC(true);
//     }, 300);

//   const favoritesItems = useSelector((state) => state.favorites.favoritesList);
//   const cartItems = useSelector((state) => state.cart.cartList);

//   console.log("Cart Items", cartItems);

//   const dropdownCartTotal = useRef(0);
//   const calculateIndividualTotal = () => {
//     const total = cartItems.reduce((acc, price) => {
//       const prices = price.price.split("$");
//       return acc + Number(prices[1]);
//     }, 0);

//     dropdownCartTotal.current = total;
//   };
//   calculateIndividualTotal();

//   return (
//     <div className="navigation-container">
//       <div className="navigation-logo">
//         <Link to="/home">
//           <img src={logo} width="170" height="50" alt="Logo-Website" />
//         </Link>
//       </div>

//       <div className="navigation-nav">
//         <ul>
//           <li>
//             <Link
//               to="/home"
//               className={`underline ${
//                 window.location.pathname === "/home" ? "active" : ""
//               }`}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ color: "#FB8122" }}
//               to="/store"
//               className={`underline ${
//                 window.location.pathname === "/store" ? "active" : ""
//               }`}
//             >
//               Store
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/streams"
//               className={`underline ${
//                 window.location.pathname === "/streams" ? "active" : ""
//               }`}
//             >
//               Streams
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/support"
//               className={`underline ${
//                 window.location.pathname === "/support" ? "active" : ""
//               }`}
//             >
//               Support
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="navigation-user">
//         {window.location.pathname === "/store" && (
//           <>
//             <button title="Cart" onClick={showCart}>
//               <AiOutlineShoppingCart />
//               <Badge className="navbar-badge" bg="warning">
//                 {cartItems.length}
//               </Badge>
//             </button>
//             <Modal show={showC} onHide={closeCart}>
//               <Modal.Header>
//                 <Modal.Title style={{ color: "#fc8b33" }}>Cart</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <div>
//                   {cartItems.length > 0 ? (
//                     <ul className="myBgColor list-group">
//                       {cartItems.map((item) => {
//                         return (
//                           <li
//                             className="d-flex justify-content-between myColor list-group-item"
//                             key={item.id}
//                           >
//                             <img
//                               src={item.image}
//                               alt="asd"
//                               width={200}
//                               style={{ marginRight: "15px" }}
//                             />
//                             {item.title}
//                             <br />
//                             {item.price}
//                             {/* {individualQuantityTotal.current.toFixed(2)} */}
//                             <button
//                               onClick={() => removeFromCart(item.id)}
//                               className="btn myBtn btn-warning"
//                             >
//                               x
//                             </button>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   ) : (
//                     <p>No games have been added to your cart.</p>
//                   )}
//                 </div>
//               </Modal.Body>
//               <Modal.Body style={{ color: "#fc8b33" }}>
//                 Total Price: <b>$ {dropdownCartTotal.current.toFixed(2)}</b>
//                 {/* Total Price: <b>$ {totalPrice}</b> */}
//               </Modal.Body>
//               <Modal.Body style={{ color: "#fc8b33" }}>
//                 Cart and payment.
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button
//                   className="checkout-btn"
//                   style={{
//                     backgroundColor: "#fc8b33",
//                     border: "none",
//                     color: "#fff",
//                   }}
//                 >
//                   <Link className="checkout-btn-main" to="/checkout">
//                     Proceed to Checkout
//                   </Link>
//                 </Button>
//               </Modal.Footer>
//             </Modal>

//             <button title="Wallet" onClick={showWallet}>
//               <IoWalletOutline />
//               <Badge className="navbar-badge" bg="warning">
//                 $176,93
//               </Badge>
//             </button>
//             <Modal show={show} onHide={closeWallet}>
//               <Modal.Header>
//                 <Modal.Title style={{ color: "#FB8122" }}>
//                   Your wallet
//                 </Modal.Title>
//               </Modal.Header>
//               <Modal.Body>Account ballance: $176,93</Modal.Body>
//               <Modal.Footer>
//                 <Button
//                   style={{ backgroundColor: "#fc8b33" }}
//                   className="text-light"
//                   variant="warning"
//                   onClick={closeWallet}
//                 >
//                   Close
//                 </Button>
//               </Modal.Footer>
//             </Modal>

//             <button title="Favorites" onClick={showFav}>
//               <MdFavoriteBorder />
//               <Badge className="navbar-badge" bg="warning">
//                 {favoritesItems.length}
//               </Badge>
//             </button>
//             <Modal show={showF} onHide={closeFav}>
//               <Modal.Header>
//                 <Modal.Title style={{ color: "#fc8b33" }}>
//                   Favorites Games List
//                 </Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <div>
//                   {favoritesItems.length > 0 ? (
//                     <ul className="myBgColor list-group">
//                       {favoritesItems.map((item) => {
//                         return (
//                           <li
//                             className="d-flex justify-content-between myColor list-group-item"
//                             key={item.id}
//                             style={{ border: "1px solid #fff" }}
//                           >
//                             {item.title} - {item.price}
//                             <button
//                               onClick={() => removeItem(item.id)}
//                               className="btn myBtn btn-warning"
//                             >
//                               x
//                             </button>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   ) : (
//                     <p>No games have been added to favorites.</p>
//                   )}
//                 </div>
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button
//                   style={{ backgroundColor: "#fc8b33" }}
//                   className="text-light"
//                   variant="warning"
//                   onClick={closeFav}
//                 >
//                   Close
//                 </Button>
//               </Modal.Footer>
//             </Modal>
//           </>
//         )}

//         <img
//           style={{ color: "#fff" }}
//           src={user.photoURL}
//           width="50"
//           height="50"
//           alt="Profile"
//           className="profile-pic-navbar"
//         />
//       </div>
//     </div>
//   );
// };

// export default NavigationBar;
import React, { useRef, useState } from "react";
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

import Badge from "react-bootstrap/Badge";

const NavigationBar = ({ user }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(favoritesActions.removeFromFavorites(id));
  };
  const removeFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const [show, setShow] = useState(false);

  const closeWallet = () => setShow(false);
  const showWallet = () =>
    setTimeout(() => {
      setShow(true);
    }, 300);

  const [showF, setShowF] = useState(false);

  const closeFav = () => setShowF(false);
  const showFav = () =>
    setTimeout(() => {
      setShowF(true);
    }, 300);

  const [showC, setShowC] = useState(false);

  const closeCart = () => setShowC(false);
  const showCart = () =>
    setTimeout(() => {
      setShowC(true);
    }, 300);

  const favoritesItems = useSelector((state) => state.favorites.favoritesList);
  const cartItems = useSelector((state) => state.cart.cartList);

  console.log("Cart Items", cartItems);

  const dropdownCartTotal = useRef(0);
  const calculateIndividualTotal = () => {
    const total = cartItems.reduce((acc, price) => {
      const prices = price.price.split("$");
      return acc + Number(prices[1]);
    }, 0);

    dropdownCartTotal.current = total;
  };
  calculateIndividualTotal();

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
            <section className="top-nav">
              <input id="menu-toggle" type="checkbox" />
              <label className="menu-button-container" htmlFor="menu-toggle">
                <div className="menu-button"></div>
              </label>
              <ul className="menu">
                <li>
                  <button title="Cart" onClick={showCart}>
                    <AiOutlineShoppingCart />
                    <Badge className="navbar-badge" bg="warning">
                      {cartItems.length}
                    </Badge>
                  </button>
                  <Modal show={showC} onHide={closeCart}>
                    <Modal.Header>
                      <Modal.Title style={{ color: "#fc8b33" }}>
                        Cart
                      </Modal.Title>
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
                                  {/* {individualQuantityTotal.current.toFixed(2)} */}
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
                      Total Price:{" "}
                      <b>$ {dropdownCartTotal.current.toFixed(2)}</b>
                      {/* Total Price: <b>$ {totalPrice}</b> */}
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
                          Proceed to Checkout
                        </Link>
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </li>

                <li>
                  <button title="Wallet" onClick={showWallet}>
                    <IoWalletOutline />
                    <Badge className="navbar-badge" bg="warning">
                      $176,93
                    </Badge>
                  </button>
                  <Modal show={show} onHide={closeWallet}>
                    <Modal.Header>
                      <Modal.Title style={{ color: "#FB8122" }}>
                        Your wallet
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Account ballance: $176,93</Modal.Body>
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
                </li>

                <li>
                  <button title="Favorites" onClick={showFav}>
                    <MdFavoriteBorder />
                    <Badge className="navbar-badge" bg="warning">
                      {favoritesItems.length}
                    </Badge>
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
                </li>
              </ul>
            </section>
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

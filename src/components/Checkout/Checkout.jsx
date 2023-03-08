// import React from "react";
// import "./Checkout.css";
// import NavigationBar from "../NavigationBar/NavigationBar";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import { cartActions } from "../../store/cart-Slice";
// import Footer from "../Footer/Footer";

// const Checkout = ({ user }) => {
//   const cartItems = useSelector((state) => state.cart.cartList);
//   const dispatch = useDispatch();

//   const decreaseQuantity = (id) => {
//     dispatch(cartActions.removeQuantityFromCart(id));
//   };

//   const increaseQuantity = () => {
//     dispatch(cartActions.addingQuantityToCart());
//   };

//   console.log(cartItems);
//   const calculateTotal = () => {
//     let total = 0;
//     for (let item of cartItems) {
//       const price = parseFloat(item.price.replace("$", ""));
//       total += price;
//     }
//     return total.toFixed(2);
//   };
//   const totalPrice = calculateTotal();
//   const totalPriceAfterTaxes = (Number(totalPrice) + 1.99).toFixed(2);

//   return (
//     <div className="checkout-container">
//       <NavigationBar user={user} />
//       <div className="small-checkout-container">
//         <h1>Checkout</h1>

//         <div className="wrapper-container">
//           {cartItems.length > 0 ? (
//             <div className="left-panel-container">
//               <Card>
//                 <ListGroup variant="flush">
//                   {cartItems.map((individualCart, i) => (
//                     <ListGroup.Item key={i}>
//                       <div className="container-i-q-p">
//                         <div className="product-info">
//                           <img src={individualCart.image} alt="" width={200} />
//                           <h5>{individualCart.title}</h5>
//                         </div>
//                         <div className="price-quantity">
//                           <div className="product-quantity">
//                             <button onClick={() => decreaseQuantity()}>
//                               -
//                             </button>
//                             <p>Quantity: {individualCart.totalQuantity}</p>
//                             <button onClick={() => increaseQuantity()}>
//                               +
//                             </button>
//                           </div>
//                           <div className="product-price">
//                             <h5>{individualCart.price}</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//               </Card>
//             </div>
//           ) : (
//             <p>No games have been added to your cart.</p>
//           )}

//           <div className="right-panel-container">
//             <div className="order-summary-container">
//               <h4>Order Summary</h4>
//               {cartItems.length > 0 ? (
//                 <div>
//                   <hr />
//                   <p>Subtotal: $ {totalPrice}</p>
//                   <p>Estimated shipping: FREE</p>
//                   <p>Estimated tax: $ 1.99</p>
//                   <p>Order total: $ {totalPriceAfterTaxes}</p>
//                   <p>Amount due: $ {totalPriceAfterTaxes}</p>
//                   <small>*Before applicable taxes</small>
//                   <Link to="/finish-checkout">
//                     <button className="checkout-colorbtn">Checkout now</button>
//                   </Link>
//                 </div>
//               ) : (
//                 ""
//               )}
//               <Link to="/store">
//                 <button className="checkout-colorbtn">Back to shopping</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Checkout;
import React from "react";
import "./Checkout.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import IndividualProduct from "./IndividualProduct/IndividualProduct";

const Checkout = ({ user }) => {
  const cartItems = useSelector((state) => state.cart.cartList);

  console.log(cartItems);
  const calculateTotal = () => {
    let total = 0;
    for (let item of cartItems) {
      const price = parseFloat(item.price.replace("$", ""));
      total += price;
    }
    return total.toFixed(2);
  };
  const totalPrice = calculateTotal();
  const totalPriceAfterTaxes = (Number(totalPrice) + 1.99).toFixed(2);

  return (
    <div className="checkout-container">
      <NavigationBar user={user} />
      <div className="small-checkout-container">
        <h1>Checkout</h1>

        <div className="wrapper-container">
          {cartItems.length > 0 ? (
            <div className="left-panel-container">
              {cartItems.map((item) => (
                <IndividualProduct
                  key={item.id}
                  quantity={item.totalQuantity}
                  id={item.id}
                  price={totalPrice}
                  image={item.image}
                  title={item.title}
                />
              ))}
            </div>
          ) : (
            <p>No games have been added to your cart.</p>
          )}

          <div className="right-panel-container">
            <div className="order-summary-container">
              <h4>Order Summary</h4>
              {cartItems.length > 0 ? (
                <div>
                  <hr />
                  <p>Subtotal: $ {totalPrice}</p>
                  <p>Estimated shipping: FREE</p>
                  <p>Estimated tax: $ 1.99</p>
                  <p>Order total: $ {totalPriceAfterTaxes}</p>
                  <p>Amount due: $ {totalPriceAfterTaxes}</p>
                  <small>*Before applicable taxes</small>
                  <Link to="/finish-checkout">
                    <button className="checkout-colorbtn">Checkout now</button>
                  </Link>
                </div>
              ) : (
                ""
              )}
              <Link to="/store">
                <button className="checkout-colorbtn">Back to shopping</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./FinishCheckout.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import chip from "../../assets/VisaCard/chip.png";
import visa from "../../assets/VisaCard//visa.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-Slice";

const FinishCheckout = ({ user }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [send, setSend] = useState(true);

  const [formComplete, setFormComplete] = useState(false);
  console.log(name);
  useEffect(() => {
    if (name && cardNumber && expirationDate && cvv) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [name, cardNumber, expirationDate, cvv]);

  const handleCardNumberChange = (event) => {
    const formattedNumber = formatNumber(
      event.target.value.replaceAll(" ", "")
    );
    setCardNumber(formattedNumber);
  };

  const formatNumber = (number) =>
    number.split("").reduce((seed, next, index) => {
      if (index !== 0 && !(index % 4)) seed += " ";
      return seed + next;
    }, "");

  const handleExpirationDateChange = (event) => {
    const formattedDate = formatExpirationDate(event.target.value);
    setExpirationDate(formattedDate);
  };

  const formatExpirationDate = (dateString) => {
    let formattedDate = dateString.replace(/[^0-9]/g, "");
    if (formattedDate.length > 2) {
      formattedDate = formattedDate.slice(0, 2) + "/" + formattedDate.slice(2);
    }
    return formattedDate;
  };

  const cartItems = useSelector((state) => state.cart.cartList);
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

  const clickHandler = (id) => {
    setSend(false);
    dispatch(cartActions.emptyEntireCart());
  };

  return (
    <div className="finish-checkout-container">
      <NavigationBar user={user} />

      {send ? (
        <div className="card-wrapper">
          <div>
            <div className="left-container">
              <div className="order-amount">
                <h4>Order Summary</h4>
                <div>
                  <hr />
                  <p>Subtotal: $ {totalPrice}</p>
                  <p>Estimated shipping: FREE</p>
                  <p>Estimated tax: $ 1.99</p>
                  <p>Order total: $ {totalPriceAfterTaxes}</p>
                  <p>Amount due: $ {totalPriceAfterTaxes}</p>
                  <small>*Before applicable taxes</small>
                </div>
              </div>
              <div className="card-main">
                <div className="card__header">
                  <div className="card__logo"></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "0 15px",
                  }}
                >
                  <img src={chip} alt="chip" width={50} />
                  <img src={visa} alt="chip" width={80} height={30} />
                </div>
                <div className="card__body">
                  <div className="card__number">{cardNumber}</div>
                  <div className="card__info">
                    <div className="card__name">{name}</div>
                    <div className="card__expiration-date">
                      {expirationDate}
                    </div>
                    <div className="card__cvv">{cvv}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-form">
            <form className="card-form-main">
              <label htmlFor="nume">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Jane"
                maxLength={19}
                required
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="number-card">Number card:</label>
              <input
                type="text"
                id="number-card"
                name="number-card"
                placeholder="1234 1234 1234 1234"
                maxLength={16}
                required
                //   onChange={(e) => setCardNumber(e.target.value)}
                onChange={handleCardNumberChange}
              />

              <label htmlFor="expiration-date">Expiration date:</label>
              <input
                type="text"
                id="expiration-date"
                name="expiration-date"
                placeholder="MM/YY"
                pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                required
                maxLength={5}
                //   onChange={(e) => setExpirationDate(e.target.value)}
                // value={expirationDate}
                onChange={handleExpirationDateChange}
              />
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                pattern="[0-9]{3}"
                required
                placeholder="***"
                maxLength={3}
                onChange={(e) => setCvv(e.target.value)}
              />
              <br />
              <button
                onClick={clickHandler}
                className="checkout-colorbtn"
                disabled={!formComplete}
              >
                Submit
              </button>
              <br />
              <Link to="/checkout">
                <button className="checkout-colorbtn">Go back to cart</button>
              </Link>
            </form>
          </div>
        </div>
      ) : (
        <div className="wrapper-circle">
          <div className="checkmark"></div>
          <p className="checkmark-p">
            THANK YOU! <br />
            for shopping with us.
          </p>
          <Link to="/store">
            <button className="checkout-colorbtn-goback">
              Go back to store.
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FinishCheckout;

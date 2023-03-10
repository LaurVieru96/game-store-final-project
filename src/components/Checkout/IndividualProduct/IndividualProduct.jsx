import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-Slice";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./IndividualProduct.css";

const IndividualProduct = ({
  quantity,
  id,
  price,
  test,
  image,
  title,
  users,
  totalUsers,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  console.log("INDIVIDUAL PRODUCT", test);
  console.log("totalPrice", totalPrice);

  // const decreaseQuantity = () => {
  //   dispatch(cartActions.removeQuantityFromCart(id));
  // };
  const decreaseQuantity = () => {
    dispatch(
      cartActions.removeQuantityFromCart({
        id,
        title,
        image,
        price,
        // price: test,
        quantity,
        users,
        totalUsers,
        totalPrice,
      })
    );
  };
  const increaseQuantity = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        image,
        price,
        // price: test,
        quantity,
        users,
        totalUsers,
        totalPrice,
      })
    );
  };

  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div className="container-i-q-p">
            <div className="product-info">
              <img src={image} alt="" width={200} />
              <h5>{title}</h5>
            </div>
            <div className="price-quantity">
              <div className="product-quantity">
                <button onClick={decreaseQuantity}>-</button>
                <p>Quantity: {quantity}</p>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <div className="product-price">
                <h5>
                  {/* ${test} <br /> */}
                  {/* {price} <br /> */}
                  {totalPrice}
                  {/* $ {(users / 1000).toFixed(2)} <br />${" "} */}
                  {/* {totalUsers} */}
                </h5>
              </div>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default IndividualProduct;

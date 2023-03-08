import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-Slice";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const IndividualProduct = ({ quantity, id, price, image, title }) => {
  const dispatch = useDispatch();
  const decreaseQuantity = () => {
    dispatch(cartActions.removeQuantityFromCart(id));
  };

  const increaseQuantity = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        image,
        price,
        quantity,
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
                <h5>{price}</h5>
              </div>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default IndividualProduct;

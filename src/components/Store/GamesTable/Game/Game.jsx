import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ReadMore from "../ReadMore/ReadMore";
import "./Game.css";
import { favoritesActions } from "../../../../store/favorites-slice";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart-Slice";
import { motion } from "framer-motion";
const Game = ({ game }) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(
      favoritesActions.addToFavorites({
        id: game.id,
        title: game.title,
        price: game.worth,
      })
    );
  };

  const buyHandler = (e) => {
    e.preventDefault();
    dispatch(
      cartActions.addToCart({
        id: game.id,
        title: game.title,
        image: game.image,
        price: game.worth,
        totalQuantity: 1,
        users: game.users,
        totalUsers: 1,
        totalPrice: game.worth,
      })
    );
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 1, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className="col"
      style={{ padding: "12px" }}
      key={game.id}
    >
      <Card className="game-individual-card">
        <Card.Img variant="top" src={game.thumbnail} />
        <Card.Body>
          <Card.Title className="game-individual-title">
            {game.title}
          </Card.Title>
          <Card.Text className="test">
            <ReadMore className="game-individual-text ">
              {game.description}
            </ReadMore>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price : {game.worth}</ListGroup.Item>
          <ListGroup.Item>Platforms : {game.platforms}</ListGroup.Item>
          <ListGroup.Item>Type : {game.type}</ListGroup.Item>
          {/* <ListGroup.Item>Users : {game.users} joined players</ListGroup.Item> */}
        </ListGroup>
        <Card.Body className="buttons">
          <Card.Link onClick={buyHandler} className="btn colorbtn" href="#">
            Buy Now
          </Card.Link>
          <Card.Link
            onClick={clickHandler}
            className="btn colorbtn favorites-btn"
            href="#"
          >
            Add to Favorites
          </Card.Link>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Game;

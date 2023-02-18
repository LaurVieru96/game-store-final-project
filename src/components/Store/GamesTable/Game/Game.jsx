import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ReadMore from "../ReadMore/ReadMore";
import "./Game.css";
import { favoritesActions } from "../../../../store/favorites-slice";
import { useDispatch } from "react-redux";
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
  // TODO:
  // FIXME:

  const buyHandler = (e) => {
    e.preventDefault();
    console.log(`test`);
  };

  return (
    <div className="col" style={{ padding: "12px" }} key={game.id}>
      <Card style={{ width: "18rem", margin: "5px" }}>
        <Card.Img variant="top" src={game.thumbnail} />
        <Card.Body>
          <Card.Title>{game.title}</Card.Title>
          <Card.Text>
            <ReadMore>{game.description}</ReadMore>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price : {game.worth}</ListGroup.Item>
          <ListGroup.Item>Platforms : {game.platforms}</ListGroup.Item>
          <ListGroup.Item>Type : {game.type}</ListGroup.Item>
          <ListGroup.Item>Users : {game.users} joined players</ListGroup.Item>
        </ListGroup>
        <Card.Body className="buttons">
          <Card.Link onClick={buyHandler} className="btn colorbtn" href="#">
            Buy Now
          </Card.Link>
          <Card.Link onClick={clickHandler} className="btn colorbtn" href="#">
            Add to Favorites
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Game;

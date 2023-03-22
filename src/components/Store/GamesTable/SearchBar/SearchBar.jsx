import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = ({ gamesList }) => {
  const [name, setName] = useState([]);
  const [find, setFind] = useState("");

  const change = (event) => {
    event.preventDefault();
    setFind(event.target.value);
  };

  useEffect(() => {
    setName(
      gamesList.filter((e) =>
        e.title.toLowerCase().includes(find.toLowerCase())
      )
    );
    // eslint-disable-next-line
  }, [find]);

  return (
    <>
      <input type="search" onChange={change} />
      <ul>
        {name.length > 0
          ? name.map((e, i) => {
              return <li key={i}>{e.title}</li>;
            })
          : gamesList.map((e, i) => {
              console.log("afiseaza?");
              return <li key={i}>{e.title}</li>;
            })}
      </ul>
    </>
  );
};

export default SearchBar;

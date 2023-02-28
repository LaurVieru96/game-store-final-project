import React, { useState, useEffect } from "react";
import Game from "./Game/Game";
import { useSelector } from "react-redux";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "77eca41c4amsh7468f3f675936f6p17f94bjsnd0515102dbe1",
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

const GamesTable = () => {
  const [gamesList, setGamesList] = useState([]);

  const filterPlatform = useSelector((state) => state.filter.platform);
  console.log(filterPlatform);


  const fetchAll = async () => {
    const response = await fetch(`https://gamerpower.p.rapidapi.com/api/giveaways?`, options)
    const res = await response.json()
    
    setGamesList(res.filter((game) => game.worth !== "N/A"));
   
  }

  const fetchData = async () => {
    const platformFilters = filterPlatform
      .map((item) => `platform=${item.toLowerCase()}`)
      .join("");
   
    const response =
      filterPlatform === []
        ? await fetch(
            `https://gamerpower.p.rapidapi.com/api/giveaways?`,
            options
          )
        : await fetch(
            `https://gamerpower.p.rapidapi.com/api/giveaways?${platformFilters}`,
            options
          );
    console.log(response);

    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchAll()

  },[])
  useEffect(() => {
    fetchData()
      .then((res) => {
        console.log(res);
        const filteredGames = res.filter((game) => game.worth !== "N/A");
        console.log(filteredGames);
        setGamesList(filteredGames);
        // setGamesList(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
    // eslint-disable-next-line
  }, [filterPlatform]);

  return (
    <div className="container">
      <div className="row">
        {gamesList.map((game) => {
          return <Game game={game} key={game.id} />;
        })}
      </div>
    </div>
  );
};

export default GamesTable;

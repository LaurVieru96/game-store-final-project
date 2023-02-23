import React, { useState, useEffect } from "react";
import Game from "./Game/Game";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "77eca41c4amsh7468f3f675936f6p17f94bjsnd0515102dbe1",
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

const GamesTable = () => {
  const [gamesList, setGamesList] = useState([]);

  // https://rapidapi.com/digiwalls/api/gamerpower/

  const fetchData = async () => {
    const response = await fetch(
      "https://gamerpower.p.rapidapi.com/api/giveaways",
      options
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        const filteredGames = res.filter((game) => game.worth !== "N/A");
        setGamesList(filteredGames);
        console.log(filteredGames);
        // console.log(filteredGames[0].platforms.split(",")[0]);
        // if (filteredGames[0].platforms.split(",").includes("PC")) {
        //   console.log(`success`);
        // }
      })
      .catch((e) => {
        console.log(e.message);
      });
    // eslint-disable-next-line
  }, []);

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

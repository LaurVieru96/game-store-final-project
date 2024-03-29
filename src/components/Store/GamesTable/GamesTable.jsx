// import React, { useState, useEffect } from "react";
// import Game from "./Game/Game";
// import { useSelector } from "react-redux";

// import { motion, AnimatePresence } from "framer-motion";
// import SearchBar from "./SearchBar/SearchBar";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "77eca41c4amsh7468f3f675936f6p17f94bjsnd0515102dbe1",
//     "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
//   },
// };

// const GamesTable = () => {
//   const [gamesList, setGamesList] = useState([]);
//   // console.log(gamesList);

//   const filterPlatform = useSelector((state) => state.filter.platform);
//   // console.log(filterPlatform);

//   // const cartItems = useSelector((state) => state.cart.cartList);
//   // console.log(cartItems);

//   // SEARCH
//   // const [name, setName] = useState([]);
//   // const [find, setFind] = useState("");

//   // const change = (event) => {
//   //   event.preventDefault();
//   //   setFind(event.target.value);
//   // };

//   // useEffect(() => {
//   //   setName(
//   //     gamesList.filter((e) =>
//   //       e.title.toLowerCase().includes(find.toLowerCase())
//   //     )
//   //   );
//   //   // eslint-disable-next-line
//   // }, [find]);
//   // SEARCH

//   const fetchAll = async () => {
//     const response = await fetch(
//       `https://gamerpower.p.rapidapi.com/api/giveaways?`,
//       options
//     );
//     const res = await response.json();

//     setGamesList(res.filter((game) => game.worth !== "N/A"));
//   };

//   const fetchData = async () => {
//     const platformFilters = filterPlatform
//       .map((item) => `platform=${item.toLowerCase()}`)
//       .join("");

//     // console.log(filterPlatform);

//     const response =
//       filterPlatform === []
//         ? await fetch(
//             `https://gamerpower.p.rapidapi.com/api/giveaways?`,
//             options
//           )
//         : await fetch(
//             `https://gamerpower.p.rapidapi.com/api/giveaways?${platformFilters}`,
//             options
//           );

//     if (!response.ok) {
//       throw new Error("Data could not be fetched!");
//     } else {
//       return response.json();
//     }
//   };
//   useEffect(() => {
//     fetchAll();
//   }, []);
//   useEffect(() => {
//     fetchData()
//       .then((res) => {
//         // console.log(res);
//         const filteredGames = res.filter((game) => game.worth !== "N/A");
//         // console.log(filteredGames);
//         setGamesList(filteredGames);
//         // setGamesList(res);
//       })
//       .catch((e) => {
//         console.log(e.message);
//       });
//     // eslint-disable-next-line
//   }, [filterPlatform]);

//   return (
//     <div className="container">
//       {/* <input type="search" onChange={change} />
//       <ul>
//         {name.length > 0
//           ? name.map((e, i) => {
//               return <li key={i}>{e.title}</li>;
//             })
//           : gamesList.map((e, i) => {
//               console.log("afiseaza?");
//               return <li key={i}>{e.title}</li>;
//             })}
//       </ul> */}
//       <SearchBar gamesList={gamesList} />
//       <motion.div layout className="row">
//         <AnimatePresence>
//           {gamesList.map((game) => {
//             return <Game game={game} key={game.id} />;
//           })}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default GamesTable;

import React, { useState, useEffect } from "react";
import Game from "./Game/Game";
import { useSelector } from "react-redux";

import { motion, AnimatePresence } from "framer-motion";
// import SearchBar from "./SearchBar/SearchBar";
import "./GamesTable.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "77eca41c4amsh7468f3f675936f6p17f94bjsnd0515102dbe1",
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

const GamesTable = () => {
  const [gamesList, setGamesList] = useState([]);
  // console.log(gamesList);

  const filterPlatform = useSelector((state) => state.filter.platform);
  // console.log(filterPlatform);

  // const cartItems = useSelector((state) => state.cart.cartList);
  // console.log(cartItems);

  // SEARCH
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
  // SEARCH

  const fetchAll = async () => {
    const response = await fetch(
      `https://gamerpower.p.rapidapi.com/api/giveaways?`,
      options
    );
    const res = await response.json();

    setGamesList(res.filter((game) => game.worth !== "N/A"));
  };

  const fetchData = async () => {
    const platformFilters = filterPlatform
      .map((item) => `platform=${item.toLowerCase()}`)
      .join("");

    // console.log(filterPlatform);

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

    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchAll();
  }, []);
  useEffect(() => {
    fetchData()
      .then((res) => {
        // console.log(res);
        const filteredGames = res.filter((game) => game.worth !== "N/A");
        // console.log(filteredGames);
        setGamesList(filteredGames);
        // setGamesList(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
    // eslint-disable-next-line
  }, [filterPlatform]);

  return (
    <div className="container gamesTable-container">
      <input
        className="gamesTable-searchbar"
        type="search"
        onChange={change}
        placeholder="Search a game here (Ex: Nostradamus)"
      />

      <motion.div layout className="row">
        <AnimatePresence>
          {name.length > 0
            ? name.map((e, i) => {
                return <Game key={i} game={e} />;
              })
            : gamesList.map((e, i) => {
                return <Game key={i} game={e} />;
              })}
        </AnimatePresence>
      </motion.div>

      {/* <motion.div layout className="row">
        <AnimatePresence>
          {gamesList.map((game) => {
            return <Game game={game} key={game.id} />;
          })}
        </AnimatePresence>
      </motion.div> */}
    </div>
  );
};

export default GamesTable;

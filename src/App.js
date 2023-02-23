import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import firebase from "./service/config";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from "./components/Store/Store";
import Streams from "./components/Streams/Streams";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home user={user} />
            ) :
              <Login />
          }
        />
        <Route
          path="Home"
          element={user ? <Home user={user} /> : <Login />}
        />
        <Route
          path="Store"
          element={user ? <Store user={user} /> : <Login />}
        />
        <Route
          path="Streams"
          element={user ? <Streams user={user} /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


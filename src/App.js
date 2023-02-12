import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { Navigate } from "react-router";
import firebase from "./service/config";
import Login from "./components/Login";
import Home from "./container/Home";
import SignInGoogle from "./components/SignIn/SignInGoogle";
// import Menu from "./components/Menu";

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
        <Route path="login" element={<Login />} />

        <Route
          path="/"
          element={
            user ? (
              <Home user={user} />
            ) :
              <SignInGoogle>
                <Login />
              </SignInGoogle>
          }
        />
        <Route
          path="Home"
          element={user ? <Home user={user} /> : <Login />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;


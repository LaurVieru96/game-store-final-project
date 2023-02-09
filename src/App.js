import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./container/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";

function App(props) {
  const navigate = useNavigate();


  useEffect(() => {
    let user = true;
    console.log(`test`)

    console.log(props)
    if (user) {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);


  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>

      <Routes>
        <Route path="login" element={<Login />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/*" element={<Home />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;

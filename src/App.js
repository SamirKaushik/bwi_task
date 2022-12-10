import React from "react";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Signin from "./components/Signin";
import { auth } from './components/firebase';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log('userAuth', userAuth)
        const User = {
          uid: userAuth.uid,
          email: userAuth.email
        }
        setUser(User)
        navigate('/home')
      } else {
        setUser(null)
        navigate('/login')
      }
    })
    return unsubscribe
  }, [])

  return (
    <>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
    </>
  );
}

export default App;

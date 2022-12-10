import React from "react";
import { useState,useEffect } from "react";
import Home from "./components/Home";
import Signin from "./components/Signin";
import {auth} from './components/firebase';

function App() {
  const [user,setUser]=useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
    const User = {
    uid: userAuth.uid,
    email: userAuth.email
    }
    if (userAuth) {
    console.log('userAuth', userAuth)
    setUser(User)
    } else {
    setUser(null)
    }
    })
    return unsubscribe
    },[])

  return (
    <>
      {user?<Home />:<Signin />}
    </>
  );
}

export default App;

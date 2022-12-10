import React from "react";
import { useRef, useState } from "react";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { auth,db } from "./firebase";

const Signin = () => {
    const emailContainer = useRef(null);
    const passwordContainer = useRef(null);
    const [register, setRegister] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword( auth,emailContainer.current.value, passwordContainer.current.value)
          .then((userCredential) => { 
            const user = userCredential.user;
            console.log(userCredential)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
          });
    }

    const signUp = (e) => {
        e.preventDefault();
        setRegister(true);
        createUserWithEmailAndPassword(auth, emailContainer.current.value, passwordContainer.current.value)
            .then((userCredential) => {
            
                const user = userCredential.user;
                setRegister(false)
                console.log(userCredential)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            })
    }

    return (
        <>
            <form action="" className="container">
            {register ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    ref={emailContainer}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    ref={passwordContainer}
                />

                <button type="submit" onClick={register?signUp:signIn}>Submit</button>
                {register || <div onClick={signUp} style={{cursor:'pointer',fontWeight:"bolder"}}>Sign Up for a new account</div>}
            </form>
        </>
    );
}
export default Signin;
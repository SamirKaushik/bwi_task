import React from "react";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const emailContainer = useRef(null);
    const passwordContainer = useRef(null);
    const [register, setRegister] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailContainer.current.value, passwordContainer.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Wrong Password');
                }
                if (error.code === 'auth/user-not-found') {
                    toast.error('User not found');
                }
                if (error.code === 'auth/invalid-email') {
                    toast.error('Invalid email');
                }
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
                console.log(error.code)
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('Email Already in Use');
                }
                if (error.code === 'auth/invalid-email') {
                    toast.error('Invalid email');
                }
                if (error.code === 'auth/weak-password') {
                    toast.error('Password must be atleast 6 digits long');
                }
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

                {register?<button type="submit" onClick={signUp}>Submit</button>:<button type="submit" onClick={signIn}>Submit</button>}

                {register || <div onClick={()=>setRegister(true)} style={{ cursor: 'pointer', fontWeight: "bolder" }}>Sign Up for a new account</div>}
            
            </form>
            <ToastContainer />
        </>
    );
}
export default Signin;
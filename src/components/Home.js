import React, { useState } from "react";
import { auth } from "./firebase";
import { getAuth, deleteUser } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [sentence, setSentence] = useState("");
    const [letter, setLetter] = useState("");
    const [result, setResult] = useState("");

    const findResult = () => {
        if (sentence.indexOf(letter) === -1) setResult("The letter does not exist in the sentence");
        else setResult(sentence.substring(sentence.indexOf(letter)));
    }
    const deleteAccount = () => {
        const resp = window.confirm("Are you sure about that?")
        if (resp) {
            const auth = getAuth();
            const user = auth.currentUser;
            deleteUser(user)
            .catch(
                (error) => {
                toast.error(error.code)
                }
            );
        }
    }

    return (
        <>
            <div className="container">

                <label htmlFor="sentence">Sentence: </label>
                <input
                    type="text"
                    name="sentence"
                    onChange={(e) => { setSentence(e.target.value) }}
                    value={sentence} />

                <label htmlFor="letter">Letter: </label>
                <input
                    type="text"
                    name="letter"
                    onChange={(e) => { setLetter(e.target.value) }}
                    value={letter} />

                <label htmlFor="result">Result:</label>
                <input
                    type="text"
                    name="result"
                    value={result}
                    readOnly
                />

                <button onClick={findResult}>Submit</button>

            </div>
            <p>
                <button onClick={() => auth.signOut()}>Signout</button>
            </p>
            <p>
                <button onClick={deleteAccount}>Delete Account</button>
            </p>
            <ToastContainer></ToastContainer>
        </>
    );
}
export default Home;
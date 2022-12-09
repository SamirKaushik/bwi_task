import React from "react";
import { useState } from "react";
function App() {
  const [sentence, setSentence] = useState("");
  const [letter, setLetter] = useState("");
  const [result, setResult] = useState("");
  const findResult = () => {
   if(sentence.indexOf(letter)===-1) setResult("The letter does not exist in the sentence");
   else setResult(sentence.substring(sentence.indexOf(letter)));
  }
  return (
    <div className="container">

      <label htmlFor="sentence">Sentence: </label>
      <input
        type="text"
        name="sentence"
        onChange={(e) => {setSentence(e.target.value)} }
        value={sentence} />

      <label htmlFor="letter">Letter: </label>
      <input
        type="text"
        name="letter"
        onChange={(e) => {setLetter(e.target.value)} }
        value={letter} />

      <div className="result">{result}</div>

      <button onClick={findResult}>Submit</button>

    </div>
  );
}

export default App;

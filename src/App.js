import React, { useState, useEffect } from "react";
import SimpleInput from "./components/SimpleInput";

function App() {

  const [enteredInfo, setEnteredInfo] = useState('');

  const simpleInputValue = (value) => {
    setEnteredInfo(value);
  };



  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredInfo);
  };

  return (
    <div className="app">
      <form onSubmit={formSubmitHandler}>
        <SimpleInput onValue={simpleInputValue}/>
        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

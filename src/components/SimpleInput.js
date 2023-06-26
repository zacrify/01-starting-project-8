import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;


  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(!enteredNameIsValid){
      return;
    }
    setEnteredNameTouched(true);
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const onBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  
  const formControlClass = `${!nameInputIsInValid ? "form-control" : "form-control invalid"}`;
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formControlClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputHandler}
          onBlur={onBlurHandler}
        />
        {nameInputIsInValid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

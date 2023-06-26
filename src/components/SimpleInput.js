import React, { useState } from "react";
import useValidation from "../hooks/use-Validation";

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;


  // const nameInputHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const formSubmitHandler = (event) => {
  //   event.preventDefault();
  //   if(!enteredNameIsValid){
  //     return;
  //   }
  //   setEnteredNameTouched(true);
  //   console.log(enteredName);
  //   setEnteredName("");
  //   setEnteredNameTouched(false);
  // };

  // const onBlurHandler = () => {
  //   setEnteredNameTouched(true);
  // };
  
  // const formControlClass = `${!nameInputIsInValid ? "form-control" : "form-control invalid"}`;

  const {enteredName, enteredNameIsValid, nameInputIsInValid, nameInputHandler, formSubmitHandler, onBlurHandler, formControlClass} = useValidation();

  props.onValue(enteredName);
  return (

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
  );
};

export default SimpleInput;

import React, {useState} from 'react';

const useValidation = () => {
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
        {enteredName, enteredNameIsValid, nameInputIsInValid, nameInputHandler, formSubmitHandler, onBlurHandler, formControlClass}
    );
};

export default useValidation;
import React, {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const changeHandler = () => {
    console.log(nameInputRef.current.value);
    if (nameInputRef.current.value.trim() !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    
  };

  const onClickHandler = (event) => {
    event.preventDefault();
  console.log('Submit');
  };
  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={changeHandler}/>
        {!isValid && <p>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isValid} onClick={onClickHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

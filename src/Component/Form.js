import React, { useEffect, useRef, useState } from 'react'

const Form = () => {
    const previousInputValue = useRef("");
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    
    function changeColor() {
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.value = "RAR";
    }
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          name='name'
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>

        <button onClick={changeColor}>Change Color</button>
      </>
    );
  }

export default Form

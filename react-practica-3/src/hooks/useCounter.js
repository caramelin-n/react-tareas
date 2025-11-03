import { useState } from "react"

export const useCounter = (initialValue) => {
  const [ count, setCount ] = useState(initialValue);
  
  const handleIncrement = (number) => {
    setCount(count + number);
  };

  const handleDecrement = (number) => {
    if(count - number < 1 ) return;

    setCount(count - number);
  };

  const handleReset = () => {
    setCount(initialValue);
  }
    return {
        count,
        handleDecrement,
        handleIncrement,
        handleReset
    };
};

import React, { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return {
    count,
    increment,
    decrement
  };
};

export const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </>
  );
};

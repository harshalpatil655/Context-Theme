import React from "react";
import { useReducer } from "react";

const reducer = (counter, { type, payload }) => {
  switch (type) {
    case "INCREMENT": {
      return counter + payload;
    }
    case "DECREMENT": {
      return counter - payload;
    }
    default: {
      return counter;
    }
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;

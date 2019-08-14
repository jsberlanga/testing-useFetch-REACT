import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      if (state <= 0) return state;
      else {
        return state - 1;
      }
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const App = () => {
  return (
    <Counter>
      {(count, dispatch) => (
        <>
          <p data-testid="count">Count: {count}</p>
          <button
            data-testid="increment"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +
          </button>
          <button
            data-testid="decrement"
            disabled={count <= 0}
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            -
          </button>
          <button
            data-testid="reset"
            onClick={() => dispatch({ type: "RESET" })}
          >
            reset
          </button>
        </>
      )}
    </Counter>
  );
};

const Counter = props => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return <>{props.children(count, dispatch)}</>;
};

export default App;

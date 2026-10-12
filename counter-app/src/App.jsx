import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">

      <h1>Counter App</h1>

      <div className="count">
        {count}
      </div>

      <div className="buttons">

        <button onClick={decrement}>
          Decrement
        </button>

        <button onClick={reset}>
          Reset
        </button>

        <button onClick={increment}>
          Increment
        </button>

      </div>

    </div>
  );
}

export default App;
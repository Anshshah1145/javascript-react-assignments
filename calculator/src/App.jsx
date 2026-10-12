import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNumber, setWaitingForNumber] = useState(false);

  // Calculator function using switch statement
  function calculator(a, b, op) {
    switch (op) {
      case "+":
        return a + b;

      case "-":
        return a - b;

      case "*":
        return a * b;

      case "/":
        if (b === 0) {
          return "Error";
        }
        return a / b;

      default:
        return b;
    }
  }

  // Number buttons
  function handleNumber(number) {
    if (display === "Error") {
      setDisplay(number);
      setFirstNumber(null);
      setOperator(null);
      return;
    }

    if (waitingForNumber) {
      setDisplay(number);
      setWaitingForNumber(false);
    } else {
      setDisplay(
        display === "0" ? number : display + number
      );
    }
  }

  // Operator buttons
  function handleOperator(op) {
    const currentNumber = parseFloat(display);

    if (firstNumber === null) {
      setFirstNumber(currentNumber);
    } else if (operator !== null) {
      const result = calculator(
        firstNumber,
        currentNumber,
        operator
      );

      setDisplay(String(result));
      setFirstNumber(result);
    }

    setOperator(op);
    setWaitingForNumber(true);
  }

  // Equal button
  function handleEquals() {
    if (firstNumber === null || operator === null) {
      return;
    }

    const secondNumber = parseFloat(display);

    const result = calculator(
      firstNumber,
      secondNumber,
      operator
    );

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
    setWaitingForNumber(true);
  }

  // Clear button
  function handleClear() {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setWaitingForNumber(false);
  }

  // Decimal button
  function handleDecimal() {
    if (waitingForNumber) {
      setDisplay("0.");
      setWaitingForNumber(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  return (
    <div className="calculator">

      {/* Display */}
      <div className="display">
        {display}
      </div>

      {/* Calculator Buttons */}
      <div className="buttons">

        {/* Row 1 */}
        <button className="clear" onClick={handleClear}>
          AC
        </button>

        <button
          className="operator"
          onClick={() => handleOperator("/")}
        >
          ÷
        </button>

        <button
          className="operator"
          onClick={() => handleOperator("*")}
        >
          ×
        </button>

        <button
          className="operator"
          onClick={() => handleOperator("-")}
        >
          −
        </button>

        {/* Row 2 */}
        <button onClick={() => handleNumber("7")}>
          7
        </button>

        <button onClick={() => handleNumber("8")}>
          8
        </button>

        <button onClick={() => handleNumber("9")}>
          9
        </button>

        <button
          className="operator"
          onClick={() => handleOperator("+")}
        >
          +
        </button>

        {/* Row 3 */}
        <button onClick={() => handleNumber("4")}>
          4
        </button>

        <button onClick={() => handleNumber("5")}>
          5
        </button>

        <button onClick={() => handleNumber("6")}>
          6
        </button>

        <button
          className="equals"
          onClick={handleEquals}
        >
          =
        </button>

        {/* Row 4 */}
        <button onClick={() => handleNumber("1")}>
          1
        </button>

        <button onClick={() => handleNumber("2")}>
          2
        </button>

        <button onClick={() => handleNumber("3")}>
          3
        </button>

        <div></div>

        {/* Row 5 */}
        <button
          className="zero"
          onClick={() => handleNumber("0")}
        >
          0
        </button>

        <button onClick={handleDecimal}>
          .
        </button>

        <div></div>

      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import {
  add,
  divide,
  multiply,
  pow,
  sqrt,
  substract
} from "../../helpers/functions";
import "../../index.css";
import "./Calculator.css";

const Calculator = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [operation, setOperation] = useState();
  const [value, setValue] = useState();

  const result = () => {
    let calculation = null;
    switch (operation) {
      case "+":
        calculation = add(x, y);
        break;
      case "-":
        calculation = substract(x, y);
        break;
      case "*":
        calculation = multiply(x, y);
        break;
      case "/":
        calculation = divide(x, y);
        break;
      case "'":
        calculation = pow(x, y);
        break;
      case "sqrt":
        calculation = sqrt(x);
        break;
      default:
        calculation = null;
        break;
    }
    setValue(calculation);
  };

  return (
    <div>
      <div className="title">
        <h1>Calculator</h1>
      </div>
      <div className="fields">
        <div>
          <h3>Variable X:</h3>
          <input
            placeholder="Enter first variable"
            type="number"
            onChange={(e) => setX(parseFloat(e.target.value), 10)}
            className="input_field"
          />
        </div>
        <div>
          <h3>Operation:</h3>
          <select
            onChange={(e) => setOperation(e.target.value)}
            className="select_field"
          >
            <option value="" disabled selected>
              Choose operation...
            </option>
            <option value="+">Add</option>
            <option value="-">Substract</option>
            <option value="*">Multipy</option>
            <option value="/">Divide</option>
            <option value="'">Square</option>
            <option value="sqrt">Square Root of variable X</option>
          </select>
        </div>
        <div>
          <h3>Variable Y:</h3>
          <input
            disabled={operation === "sqrt"}
            placeholder="Enter second variable"
            type="number"
            onChange={(e) => setY(parseFloat(e.target.value), 10)}
            className="input_field"
          />
        </div>
      </div>
      <div className="button_wrapper">
        <button onClick={() => result(operation)} className="calculate_button">
          Calculate
        </button>
      </div>
      <div>
        <h3>Result:</h3>
        <div className="result_field">{value}</div>
      </div>
    </div>
  );
};

export default Calculator;

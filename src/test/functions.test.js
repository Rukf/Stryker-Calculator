import {
  add,
  divide,
  multiply,
  pow,
  sqrt,
  substract
} from "../helpers/functions";

describe("Arithmetic functions", () => {
  // Addition tests
  test("Should add two numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  // Substraction tests

  test("Should substract two numbers", () => {
    expect(substract(20, 10)).toBe(10);
  });

  // Multiplication tests

  test("Should multiply two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  // Divide tests

  test("Should divide two numbers", () => {
    expect(divide(40, 2)).toBe(20);
  });

  // Square tests

  test("Should square a number", () => {
    expect(pow(3, 3)).toBe(27);
  });

  // Square root tests

  test("Should calculate square root of a number", () => {
    expect(sqrt(9)).toBe(3);
  });
});

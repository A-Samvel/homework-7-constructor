function Calculator() {
}

Calculator.prototype.add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

Calculator.prototype.subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

Calculator.prototype.multiply = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

Calculator.prototype.divide = function (firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};

const calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
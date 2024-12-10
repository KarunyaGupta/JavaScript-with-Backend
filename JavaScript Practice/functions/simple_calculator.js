function calculator(a, b, operator) {
    if (operator === '+') {
      return a + b;
    } else if (operator === '-') {
      return a - b;
    } else if (operator === '*') {
      return a * b;
    } else if (operator === '/') {
      if (b!== 0) {
        return a / b;
      } else {
        return "Denominator is not equal to zero";
      }
    } else if (operator === '%') {
      return a % b;
    } else {
      return "Invalid Operator";
    }
}
  
let a = parseFloat(prompt("Enter first number"));
let b = parseFloat(prompt("Enter second number"));
let operator = prompt("Enter operator (+, -, *, /, %)");
  
if (operator!== '+' && operator!== '-' && operator!== '*' && operator!== '/' && operator!== '%') {
    console.log("Invalid Operator");
}else {
    let result = calculator(a, b, operator);
    console.log(`${a} ${operator} ${b} = ${result}`);
}
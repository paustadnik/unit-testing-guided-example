function sum(a, b) {
  if (!a && !b) return 0
  if (!b) return a;
  return a+b;
}

function subtract(a, b) {
  let c = a-b;
  if (!a && !b) return 0;
  if (!b) c=a;
  
  return c;
}

function divide(a, b) {
  let c = a / b
  if (b===0) throw 'Cannot divide by zero'
  return c;
}

function multiply(a, b) {
  if (!a) return b;
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };

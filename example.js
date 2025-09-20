// Simple function to add two numbers
function add(a, b) {
  return a + b;
}

// Simple function to greet someone
function greet(name) {
  return `Hello, ${name}!`;
}

// Simple class example
class Calculator {
  add(x, y) {
    return x + y;
  }

  multiply(x, y) {
    return x * y;
  }
}

// Array helper function
function getSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to multiply an array of numbers
function multiply(a, b) {
  return a * b;
}

// Function to find maximum value in array
function getMax(numbers) {
  if (numbers.length === 0) return undefined;
  return Math.max(...numbers);
}

// Export functions if using modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    add,
    greet,
    Calculator,
    getSum,
    multiply,
    getMax,
  };
}

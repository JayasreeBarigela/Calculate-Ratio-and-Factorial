const factorial = require("../factorial/index");
const ratio = require("../ratio/index");

function ratioFactorial(a, b, c) {
  return {
    ratio: ratio(a, b),
    factorial: factorial(c),
  };
}

module.exports = ratioFactorial;

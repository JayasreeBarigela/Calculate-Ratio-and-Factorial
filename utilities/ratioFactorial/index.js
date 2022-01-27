const factorial = require("../factorial/index");
const ratio = require("../ratio/index");

function ratioAndFactorial(a, b, c) {
  return {
    ratio: ratio(a, b),
    factorial: factorial(c),
  };
}

module.exports = ratioAndFactorial;

function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !(a || b);
}

function one(a, b) {
  return (a && !b) || (!a && b);
}

function truthiness(a) {
  if (a) {
    return true;
  } else {
    return false;
  }
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  return Math.abs(a % 2) == 1;
}

function isEven(a) {
  return a % 2 == 0;
}

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
}

function startsWith(char, string) {
  return string.charAt(0) == char;
}

function containsVowels(string) {
// insert your code here

function isLowerCase(string) {
  if (string.toLowerCase() !== string) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};

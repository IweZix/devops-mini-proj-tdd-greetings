function isNullOrWhitespace(str) {
  return str === null || str === undefined || str === '';
}

function isEqualsToNameUpperCase(str) {
  return str === str.toUpperCase();
}

function isArrayWithTwoOrMoreNames(arr) {
  let stringToReturn = 'Hello, ';
  arr.forEach((n, index) => {
    if (arr.length === 2) {
      if (index === arr.length - 1) {
        stringToReturn += `and ${n}.`;
      } else {
        stringToReturn += `${n} `;
      }
    } else if (index === arr.length - 1) {
      stringToReturn += `and ${n}.`;
    } else {
      stringToReturn += `${n}, `;
    }
  });
  return stringToReturn;
}

function greet(name) {
  if (isNullOrWhitespace(name)) {
    return 'Hello, my friend.';
  }
  if (Array.isArray(name)) {
    return isArrayWithTwoOrMoreNames(name);
  }
  if (isEqualsToNameUpperCase(name)) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}

module.exports = greet;

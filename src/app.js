function isNullOrWhitespace(str) {
  return str === null || str === undefined || str === '';
}

function isEqualsToNameUpperCase(str) {
  return str === str.toUpperCase();
}

function isArrayAndHaveTwoNames(arr) {
  let stringToReturn = 'Hello, ';
  arr.forEach((n, index) => {
    if (index === arr.length - 1) {
      stringToReturn += `and ${n}.`;
    } else {
      stringToReturn += `${n} `;
    }
  });
  return stringToReturn;
}

function greet(name) {
  if (isNullOrWhitespace(name)) {
    return 'Hello, my friend.';
  }
  if (Array.isArray(name)) {
    return isArrayAndHaveTwoNames(name);
  }
  if (isEqualsToNameUpperCase(name)) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}

module.exports = greet;

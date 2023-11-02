function isNullOrWhitespace(str) {
  return str === null || str === undefined || str === '';
}

function isEqualsToNameUpperCase(str) {
  return str === str.toUpperCase();
}

function greet(name) {
  if (isNullOrWhitespace(name)) {
    return 'Hello, my friend.';
  }
  if (Array.isArray(name)) {
    let stringToReturn = 'Hello, ';
    name.forEach((n, index) => {
      if (index === name.length - 1) {
        stringToReturn += `and ${n}.`;
      } else {
        stringToReturn += `${n} `;
      }
    });
    return stringToReturn;
  }
  if (isEqualsToNameUpperCase(name)) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}

module.exports = greet;

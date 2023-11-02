function isEqualsToNameUpperCase(str) {
  return str === str.toUpperCase();
}

function isNullOrWhitespace(str) {
  return str === null || str === undefined || str === '';
}

function greet(name) {
  if (isNullOrWhitespace(name)) {
    return 'Hello, my friend.';
  }
  if (isEqualsToNameUpperCase(name)) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}

module.exports = greet;

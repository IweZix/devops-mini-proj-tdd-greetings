function greet(name) {
  return name === null || name === undefined || name === ''
    ? 'Hello, my friend.'
    : `Hello, ${name}.`;
}

module.exports = greet;

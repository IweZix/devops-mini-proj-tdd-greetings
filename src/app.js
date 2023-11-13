/* eslint-disable linebreak-style */
function isNullOrWhitespace(str) {
  return str === null || str === undefined || str === '';
}

function isEqualsToNameUpperCase(str) {
  return str === str.toUpperCase();
}

function isArrayAndHaveTwoNames(arr) {
  let stringToReturn = 'Hello, ';
  const upperCaseArray = arr.filter(isEqualsToNameUpperCase);
  const lowerCaseArray = arr.filter((n) => !isEqualsToNameUpperCase(n));

  if (upperCaseArray.length > 1) {
    return false;
  }

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < lowerCaseArray.length; index++) {
    const n = lowerCaseArray[index];

    if (lowerCaseArray.length === 2) {
      stringToReturn += `${lowerCaseArray[0]} and ${lowerCaseArray[1]}.`;
      break;
    } else if (index === lowerCaseArray.length - 1) {
      stringToReturn += `and ${n}.`;
    } else {
      stringToReturn += `${n}, `;
    }
  }

  if (upperCaseArray.length === 1) {
    stringToReturn += ` AND HELLO ${upperCaseArray[0]} !`;
  }

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

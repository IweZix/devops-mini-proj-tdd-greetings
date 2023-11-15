/* eslint-disable linebreak-style */
function isNullOrWhitespace(str) {
  return str === null || str === undefined || str === '';
}

function isEqualsToNameUpperCase(str) {
  return str === str.toUpperCase();
}

function isArrayAndHaveTwoNames(arr) {
  const languages = ['fr', 'nl', 'en'];
  let concat;
  let language = arr.find((n) => languages.includes(n));
  let names = arr.filter((n) => !languages.includes(n));
  let upperCaseNames = names.filter((n) => n === n.toUpperCase());
  let lowerCaseNames = names.filter((n) => n !== n.toUpperCase());

  if (upperCaseNames.length > 1 || names.length !== lowerCaseNames.length + upperCaseNames.length) {
    return false;
  }

  let greeting;
  switch (language) {
    case 'fr':
      greeting = 'Bonjour';
      concat = 'et ';
      break;
    case 'nl':
      greeting = 'Hallo';
      concat = 'en ';
      break;
    default:
      greeting = 'Hello';
      concat = 'and ';
      break;
  }

  let stringToReturn = `${greeting}, `;
  lowerCaseNames.forEach((n, index) => {
    if (lowerCaseNames.length === 1){
      stringToReturn += `${n}.`
    } else if (index === lowerCaseNames.length - 1) {
      stringToReturn += `${concat}${n}.`;
    } else {
      stringToReturn += `${n}${index === lowerCaseNames.length - 2 ? ' ' : ', '}`;
    }
  });

  if (upperCaseNames.length === 1) {
    stringToReturn += ` AND HELLO ${upperCaseNames[0]} !`;
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

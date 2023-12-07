/**
 * Check if a string is null, undefined or empty
 * @param {String} str to check
 * @returns {Boolean} true if str is null, undefined or empty
 */
function isNullOrWhitespace(str) {
  return str === null || str === undefined || str === '';
}

/**
 * Check if a string is equals to his upper case
 * @param {String} str to check
 * @returns {Boolean} true if str is equals to his upper case
 */
function isEqualsToNameUpperCase(str) {
  return str === str.toUpperCase();
}

/**
 * Check if an array have two names
 * @param {Array} arr to check
 * @returns {String} Greeting message
 */
function isArrayAndHaveTwoNames(arr) {
  const languages = ['fr', 'nl', 'en'];
  let concat;
  const language = arr.find((n) => languages.includes(n));
  const names = arr.filter((n) => !languages.includes(n));
  const upperCaseNames = names.filter((n) => n === n.toUpperCase());
  const lowerCaseNames = names.filter((n) => n !== n.toUpperCase());

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
    if (lowerCaseNames.length === 1) {
      stringToReturn += `${n}.`;
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

/**
 * Greet some name(s)
 * @param {String[]} name Name(s) to greet
 * @returns {String} Greeting message
 */
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

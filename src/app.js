/* eslint-disable linebreak-style */
function isNullOrWhitespace(str) {
  return str === null || str === undefined || str === '';
}

function isEqualsToNameUpperCase(str) {
  return str === str.toUpperCase();
}

function isArrayAndHaveTwoNames(arr) {
  let stringToReturn = 'Hello, ';
  let concat;
  let language;
  let countLanguage;
  let newArray = [];
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

  arr.forEach((n, index) => {
    if (n.length === 2) {
      countLanguage++;
      if (n === 'fr' || n === 'nl' || n === 'en') {
        language = n;
        arr.splice(index, 1);
      }
    } else {
      newArray.push(n);
    }
  })
  // if more than a language
  if (countLanguage > 1){
    return false;
  }

  // if language isn't a save language
  if (countLanguage === 1 && language === ' '){
    return false;
  }
  
  if (language === 'fr') {
    stringToReturn = 'Bonjour, ';
    concat = 'et ';
    arr.forEach((n, index) => {
      console.log(n);
      if (arr.length === 1){
        stringToReturn += `${n}.`
      } else if (index === arr.length - 1) {
        stringToReturn += `${concat}${n}.`;
      } else {
        stringToReturn += `${n} `;
      }
    });
  } else if (language === 'nl') {
    stringToReturn = 'Hallo, ';
    concat = 'en ';
    arr.forEach((n, index) => {
      console.log(n);
      if (arr.length === 1){
        stringToReturn += `${n}.`
      } else if (index === arr.length - 1) {
        stringToReturn += `${concat}${n}.`;
      } else {
        stringToReturn += `${n} `;
      }
    });
  } else if (language === 'en') {
    stringToReturn = 'Hello, '
    concat = 'and '; 
    arr.forEach((n, index) => {
      console.log(n);
      if (arr.length === 1){
        stringToReturn += `${n}.`
      } else if (index === arr.length - 1) {
        stringToReturn += `${concat}${n}.`;
      } else {
        stringToReturn += `${n} `;
      }
    });
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

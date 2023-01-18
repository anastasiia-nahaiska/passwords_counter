'use strict';

// This function will work correctly
// even if the password strings contain unnecessary spaces.
// Feel free to change the content in passwords.tsx

export const validate = (line) => {
  if (!line.length) {
    return false;
  }

  const numberPattern = /\d+/g;
  let partsOfLine = line.split(' ');
  let frequencyFrom;
  let frequencyTo;
  let password;

  if (partsOfLine.length > 3) {
    partsOfLine = partsOfLine.filter(
      (part) => part !== '' && part !== ':' && part !== '-'
    );
  }

  if (partsOfLine.length === 4) {
    frequencyFrom = partsOfLine[1].match(numberPattern).join('');
    frequencyTo = partsOfLine[2].match(numberPattern).join('');
    password = partsOfLine[3];
  } else {
    const range = partsOfLine[1].split('-');

    frequencyFrom = range[0].match(numberPattern).join('');
    frequencyTo = range[1].match(numberPattern).join('');
    password = partsOfLine[2];
  }

  const requiredChar = partsOfLine[0];

  const countOfRequiredChars = password
    .split('')
    .filter((char) => char === requiredChar).length;

  const isValidPassword =
    countOfRequiredChars >= +frequencyFrom &&
    countOfRequiredChars <= +frequencyTo;

  return isValidPassword;
};

// This function will work correctly only
// if the password strings follow the example in the task
// and don't contain extra spaces.

// export const validate = (line) => {
//   if (!line.length) {
//     return false;
//   }

//   const partsOfLine = line.split(' ');
//   const requiredChar = partsOfLine[0];
//   const range = partsOfLine[1].slice(0, -1).split('-');
//   const frequencyFrom = range[0];
//   const frequencyTo = range[1];
//   const password = partsOfLine[2];

//   const countOfRequiredChars = password
//     .split('')
//     .filter(char => char === requiredChar)
//     .length;

//   const isValidPassword = countOfRequiredChars >= +frequencyFrom &&
//     countOfRequiredChars <= +frequencyTo;

//   return isValidPassword;
// };

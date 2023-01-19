'use strict';

export const validate = (line: string): boolean => {
  if (!line.length) {
    return false;
  }

  const partsOfLine = line.split(/[\s-:]+/g);

  if (partsOfLine.length !== 4) {
    throw new Error('Invalid data');
  }

  const requiredChar = partsOfLine[0];
  const frequencyFrom = partsOfLine[1];
  const frequencyTo = partsOfLine[2];
  const password = partsOfLine[3];

  if (isNaN(+frequencyFrom) || isNaN(+frequencyTo)) {
    throw new Error('Invalid range');
  }

  const countOfRequiredChars = password
    .split('')
    .filter((char) => char === requiredChar)
    .length;

  const isValidPassword = countOfRequiredChars >= +frequencyFrom
    && countOfRequiredChars <= +frequencyTo;

  return isValidPassword;
};

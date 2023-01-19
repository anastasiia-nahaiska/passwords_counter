'use strict';

export const validate = (line: string): boolean => {
  if (!line.length) {
    return false;
  }

  const partsOfLine = line.trim().split(/[\s-:]+/g);

  if (partsOfLine.length !== 4) {
    throw new Error(
      'Invalid data. Expected format: <symbol> <number>-<number>: <password>'
    );
  }

  const [
    requiredChar,
    frequencyFrom,
    frequencyTo,
    password
  ] = partsOfLine;

  if (isNaN(+frequencyFrom) || isNaN(+frequencyTo)) {
    throw new Error('Invalid range. Expected range format: <number>-<number>:');
  }

  const countOfRequiredChars = password
    .split('')
    .filter((char) => char === requiredChar).length;

  const isValidPassword =
    countOfRequiredChars >= +frequencyFrom &&
    countOfRequiredChars <= +frequencyTo;

  return isValidPassword;
};

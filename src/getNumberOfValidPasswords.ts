'use strict';

import { validate } from './validate.js';

export const getNumberOfValidPasswords = (fileContent: string): number => {
  let numberOfValidPasswords = 0;

  fileContent.split(/\r?\n/).forEach((line, i) => {
    try {
      const isValid = validate(line);

      if (isValid) {
        numberOfValidPasswords++;
      }
    } catch (error) {
      console.log(`${error} in ${i + 1} line`);
    }
  });

  return numberOfValidPasswords;
};

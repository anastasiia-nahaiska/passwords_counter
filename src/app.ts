'use strict';

import fs from 'fs';
import { validate } from './validate.js';

export const getNumberOfValidPasswords = (relativeFilePath: string): number => {
  const AbsolutePathToFile = new URL(relativeFilePath, import.meta.url);
  const fileContents = fs.readFileSync(AbsolutePathToFile, 'utf-8');

  let numberOfValidPasswords = 0;

  fileContents.split(/\r?\n/).forEach((line, i) => {
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

const NumberOfValidPasswords = getNumberOfValidPasswords('./passwords.txt');

console.log(NumberOfValidPasswords);

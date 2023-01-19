'use strict';

import fs from 'fs';
import { validate } from './validate.js';

export const getNumberOfValidPasswords = (relativeFilePath) => {
  const AbsolutePathToFile = new URL(relativeFilePath, import.meta.url);
  const fileContents = fs.readFileSync(AbsolutePathToFile, 'utf-8');

  let numberOfValidPasswords = 0;

  fileContents.split(/\r?\n/).forEach(line => {
    const isValid = validate(line);

    if (isValid) {
      numberOfValidPasswords++;
    }
  });

  return numberOfValidPasswords;
};

const NumberOfValidPasswords = getNumberOfValidPasswords('./passwords.txt');

// eslint-disable-next-line no-console
console.log(NumberOfValidPasswords);

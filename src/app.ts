'use strict';

import fs from 'fs';

import { getNumberOfValidPasswords } from './getNumberOfValidPasswords.js';

export const app = (relativeFilePath: string): number => {
  const AbsolutePathToFile = new URL(relativeFilePath, import.meta.url);
  const fileContent = fs.readFileSync(AbsolutePathToFile, 'utf-8');
  const numberOfValidPasswords = getNumberOfValidPasswords(fileContent);

  return numberOfValidPasswords;
};

const result = app('./passwords.txt');

console.log(result);

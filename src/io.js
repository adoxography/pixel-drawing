'use strict'

const PROGRAM_PFX = 'pixel-file-';

const generateKey = (name) => `${PROGRAM_PFX}${name}`;

const generateName = (initialName) => {
  if (!programExists(initialName)) {
    return initialName;
  }

  const matchData = initialName.match(/^(.*)-(\d+)$/);

  if (matchData) {
    return `${matchData[1]}-${parseInt(matchData[2])+1}`;
  }

  return `${initialName}-1`;
};

const allKeys = (prefix) => {
  const pattern = new RegExp(`^${prefix}(.*)$`);

  return Object.keys(localStorage)
    .filter(key => key.match(pattern))
    .map(key => key.match(pattern)[1]);
};

const allPrograms = () => allKeys(PROGRAM_PFX);

const getProgram = (name) => JSON.parse(localStorage.getItem(generateKey(name)));

const programExists = (name) => localStorage.getItem(generateKey(name)) !== null;

const renameProgram = (oldName, newName) => {
  const oldKey = generateKey(oldName);
  const newKey = generateKey(newName);

  localStorage.setItem(newKey, localStorage.getItem(oldKey));
  localStorage.removeItem(oldKey);
};

const saveProgram = (name, data) => localStorage.setItem(name, JSON.stringify(data));

module.exports = {
  PROGRAM_PFX,
  generateKey,
  generateName,
  allKeys,
  allPrograms,
  getProgram,
  programExists,
  renameProgram,
  saveProgram
};

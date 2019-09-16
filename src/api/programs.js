'use strict';

const PFX = 'pixel-file-';

const allKeys = () => {
  const pattern = new RegExp(`^${PFX}(.*)$`);

  return new Promise((resolve, reject) => {
    const keys = Object.keys(localStorage)
      .filter(key => key.match(pattern))
      .map(key => key.match(pattern)[1]);
    resolve(keys);
  });
};

const getProgram = (key) => {
  const fullKey = `${PFX}${key}`;

  return new Promise((resolve, reject) => {
    const programString = localStorage.getItem(fullKey);

    if (programString === null) {
      reject(`No program named "${key}" exists.`);
    } else {
      try {
        resolve(JSON.parse(programString));
      } catch (err) {
        reject(`The program named ${key} is corrupted.`);
      }
    }
  });
};

const saveProgram = (key, data) => {
  const fullKey = `${PFX}${key}`;

  return new Promise((resolve, reject) => {
    localStorage.setItem(fullKey, JSON.stringify(data));
    resolve();
  });
};

const renameProgram = (oldKey, newKey) => {
  const fullOldKey = `${PFX}${oldKey}`;
  const fullNewKey = `${PFX}${newKey}`;

  return new Promise((resolve, reject) => {
    localStorage.setItem(fullNewKey, localStorage.getItem(fullOldKey));
    localStorage.removeItem(fullOldKey);
    resolve();
  });
};

export default {
  allKeys,
  getProgram,
  renameProgram,
  saveProgram
};

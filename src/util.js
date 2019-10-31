/**
 * Retrieves the last element of an array
 *
 * @param arr  The array to look in
 * @return  The last element of `arr`
 */
const array_last = arr => arr[arr.length - 1];

/**
 * Causes a function to wait to activate until it goes for some period of time
 * without having been called.
 *
 * @param func   The function to call
 * @param delay  The amount of time to delay for, in milliseconds
 */
const debounce = (func, delay) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
};

/**
 * Escapes a String for use in a regular expression
 *
 * @param s  The string to escape
 * @return  An escaped version of `s`
 */
const escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

/**
 * Pushes a download onto the user
 *
 * @param filename  The name of the downloaded file
 * @param data  The text of the file
 */
const pushDownload = (filename, data) => {
  const blob = new Blob([ data ], { type: 'text/plain' });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const el = document.createElement('a');
    el.href = window.URL.createObjectURL(blob);
    el.download = filename;
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
  }
};

/**
 * Prompts the user to select a file, then opens it and reads its contents
 *
 * @param options
 * @return  A promise that resolves to the text of the file
 */
const openFile = ({ accept }) => {
  const el = document.createElement('input');
  el.type = 'file';
  el.accept = accept;

  return new Promise((resolve, reject) => {
    el.onchange = e => {
      const file = e.target.files[0];
      return extractFromFile(file).then(resolve);
    };

    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
  });
};

/**
 * Extracts the text from a local file descriptor
 *
 * @param file  The file to extract from
 * @return  A promise that resolves to the text of the file
 */
const extractFromFile = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const data = {
        name: file.name,
        body: e.target.result
      };
      resolve(data);
    };
    reader.readAsText(file);
  });
};

module.exports = {
  array_last,
  debounce,
  escape,
  pushDownload,
  openFile
};

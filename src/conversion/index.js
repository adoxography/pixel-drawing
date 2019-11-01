const BASE_OBJ = {
  id: null,
  name: 'Untitled',
  updated: null,
  settings: {
    frameRate: 16,
    size: 20,
    clrs: {}
  },
  text: ''
};

const SEP = '===';

function obj2txt(obj) {
  const lines = [
    `!VERSION: ${window.__VERSION__}`,
    '',
  ];

  for (const [ key, value ] of Object.entries(obj.settings)) {
    if (key !== 'clrs' && {}.hasOwnProperty.call(obj.settings, key)) {
      lines.push(`@${key}: ${value}`);
    }
  }

  lines.push('');

  for (const [ key, value ] of Object.entries(obj.settings.clrs)) {
    if ({}.hasOwnProperty.call(obj.settings.clrs, key)) {
      lines.push(`$${key}: ${value.rgb.join(', ')}`);
    }
  }

  lines.push('');
  lines.push(SEP);
  lines.push(obj.text);
  lines.push(SEP);

  return lines.join('\n');
}

function txt2obj(text) {
  const obj = JSON.parse(JSON.stringify(BASE_OBJ));
  const globals = { '__VERSION__': window.__VERSION__ };
  const textLines = [];
  let inText = false;

  for (const line of text.split('\n')) {
    if (line === SEP) {
      inText = !inText;
    } else if (inText) {
      textLines.push(line);
    } else if (line) {
      switch (line[0]) {
        case '!':
          _handleGlobal(globals, line);
          break;
        case '@':
          _handleConstant(obj.settings, line);
          break;
        case '$':
          _handleClr(obj.settings.clrs, line);
          break;
      }
    }
  }

  obj.text = textLines.join('\n');

  return obj;
}

function _handleGlobal(obj, line) {
  const { key, value } = _splitLine(line);
  obj[`__${key}__`] = value;
}

function _handleConstant(obj, line) {
  const { key, value } = _splitLine(line);
  obj[key] = JSON.parse(value);
}

function _handleClr(obj, line) {
  const { key, value } = _splitLine(line);
  const clrMatch = value.match(/^(\d+),\s*(\d+),\s*(\d+)$/);
  obj[key] = [
    parseInt(clrMatch[1]),
    parseInt(clrMatch[2]),
    parseInt(clrMatch[3]),
  ];
}

function _splitLine(line) {
  const matchData = line.match(/^[!@$]([a-zA-Z_]+):\s*(.+)$/);
  return {
    key: matchData[1],
    value: matchData[2]
  };
}

module.exports = {
  obj2txt,
  txt2obj
};

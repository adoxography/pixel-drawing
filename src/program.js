const SEP = '===';

function _txt2obj(text) {
  const obj = {
    settings: {
      clrs: {}
    }
  };
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


class Program {
  static parse(string) {
    const props = _txt2obj(string);
    return new Program(props);
  }

  constructor(props = null) {
    props = props || {};

    this.id      = props.id      || null;
    this.name    = props.name    || 'Untitled';
    this.updated = props.updated || null;
    this.text    = props.text    || '';

    const defaultSettings = {
      frameRate: 16,
      size: 20,
      clrs: {}
    };

    this.settings = { ...defaultSettings, ...props.settings };
  }

  get clrs() {
    return this.settings.clrs;
  }

  clone() {
    return JSON.parse(JSON.stringify(this));
  }

  toString() {
    const lines = [
      `!VERSION: ${window.__VERSION__}`,
      ''
    ];

    for (const [ key, value ] of Object.entries(this.settings)) {
      if (key !== 'clrs' && {}.hasOwnProperty.call(this.settings, key)) {
        lines.push(`@${key}: ${value}`);
      }
    }

    lines.push('');

    for (const [ key, value ] of Object.entries(this.clrs)) {
      if ({}.hasOwnProperty.call(this.clrs, key)) {
        lines.push(`$${key}: ${value.toString()}`);
      }
    }

    lines.push('');
    lines.push(SEP);
    lines.push(this.text);
    lines.push(SEP);

    return lines.join('\n');
  }
}

class Clr {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toArray() {
    return [ this.r, this.g, this.b ];
  }

  toString() {
    return this.toArray().join('\n');
  }
}

module.exports = {
  Clr,
  Program
};

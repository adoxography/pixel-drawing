const BEGIN_LOOP = '[';
const END_LOOP = ']';
const END_OF_LINE = ';';

Array.prototype.last = function () {
  return this[this.length - 1];
};

RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

class Parser {
  constructor() {
    this.PATTERNS = {
      begin_loop: RegExp(`(\\d*)${RegExp.escape(BEGIN_LOOP)}`),
      end_loop: RegExp(RegExp.escape(END_LOOP)),
      end_of_line: RegExp(RegExp.escape(END_OF_LINE)),
      pixel: /(\d*)([a-z]+)/
    }
  }

  maxPattern() {
    let patterns = [
      this.PATTERNS['begin_loop'],
      this.PATTERNS['end_loop'],
      this.PATTERNS['end_of_line'],
      this.PATTERNS['pixel'],
      /S+/
    ];

    return new RegExp(patterns.map(p => p.source).join('|'), 'g');
  }

  parse(string) {
    let tokens = string.matchAll(this.maxPattern());

    let program = new Program();
    let stack = [program];
    let loop;

    for (let [token] of tokens) {
      if (this.PATTERNS['pixel'].test(token)) {
        let [_, n, c] = token.match(this.PATTERNS['pixel']);
        n = n || 1;
        stack.last().add(new Pixel(parseInt(n), c));
      } else if (this.PATTERNS['begin_loop'].test(token)) {
        let [_, n] = token.match(this.PATTERNS['begin_loop']);
        n = n || 1;
        loop = new Loop(parseInt(n));
        stack.last().add(loop);
        stack.push(loop);
      } else if (token === ']') {
        if (!(stack.last() instanceof Loop)) {
          throw new Error("Unexpected ']'");
        }
        stack.pop();
      } else if (token === END_OF_LINE) {
        stack.last().add(new Newline());
      } else {
        throw new Error(`Unexpected token '${token}'`);
      }
    }

    if (stack.length > 1) {
      throw new Error("Unmatched '['");
    }

    return program;
  }
}

class Program {
  constructor() {
    this.commands = [];
  }

  add(command) {
    this.commands.push(command);
  }

  toArray() {
    return this.commands.reduce((arr, command) => arr.concat(command.toArray()), []);
  }

  length() {
    return this.commands.length;
  }
}

class Pixel {
  constructor(number, clr) {
    this.number = number;
    this.clr = clr;
  }

  toArray() {
    return Array(this.number).fill(this.clr);
  }
}

class Loop {
  constructor(number) {
    this.number = number;
    this.program = new Program();
  }

  add(command) {
    this.program.add(command);
  }

  toArray() {
    return Array(this.number).fill(this.program.toArray()).flat();
  }
}

class Newline {
  toArray() {
    return [null];
  }
}

module.exports = Parser;

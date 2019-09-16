/**
 * parser.expressions
 *
 * Defines the AST versions of program expressions
 */

/**
 * Top-level expression. All well-formed programs have Sequence as their root node.
 */
class Sequence {
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

/**
 * Draws a number of pixels horizontally
 */
class Pixel {
  constructor(number, clr) {
    this.number = number;
    this.clr = clr;
  }

  toArray() {
    return Array(this.number).fill(this.clr);
  }
}

/**
 * Runs a sequence a given number of times
 */
class Loop {
  constructor(number) {
    this.number = number;
    this.program = new Sequence();
  }

  add(command) {
    this.program.add(command);
  }

  toArray() {
    return Array(this.number).fill(this.program.toArray()).flat();
  }
}

/**
 * Moves program flow to the next line
 */
class Newline {
  toArray() {
    return [ null ];
  }
}

module.exports = {
  Loop,
  Newline,
  Pixel,
  Sequence
};

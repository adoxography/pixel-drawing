import expressions from './expressions';
import { array_last, escape } from '@/util';

// Basic token definitions
const BEGIN_LOOP = '[';
const END_LOOP = ']';
const END_OF_LINE = ';';

export class ParseError extends Error {}

// All of the parsing rules, in order
const rules = [
  { // Basic token
    pattern: /(\d*)([a-z]+)/,
    action: ({ stack, matchData }) => {
      const n = parseInt(matchData[1] || 1);
      const c = matchData[2];

      array_last(stack).add(new expressions.Pixel(n, c));
    }
  },

  
  { // Beginning of a loop
    pattern: new RegExp(`(\\d*)${escape(BEGIN_LOOP)}`),
    action: ({ stack, matchData }) => {
      const n = parseInt(matchData[1] || 1);

      const loop = new expressions.Loop(n);
      array_last(stack).add(loop);
      stack.push(loop);
    }
  },

  { // End of a loop
    pattern: new RegExp(escape(END_LOOP)),
    action: ({ stack }) => {
      if (!(array_last(stack) instanceof expressions.Loop)) {
        throw new ParseError('Unexpected "]"');
      }

      stack.pop();
    }
  },

  { // End of a line
    pattern: new RegExp(escape(END_OF_LINE)),
    action: ({ stack }) => {
      array_last(stack).add(new expressions.Newline());
    }
  },

  { // Any remaining unmatched non-space character
    pattern: /\S+/,
    action: ({ token }) => {
      throw new ParseError(`Unexpected token '${token}'`);
    }
  }
];

// Pattern for capturing all tokens
const MAX_PATTERN = new RegExp(rules.map(rule => rule.pattern.source).join('|'), 'g');

/**
 * Tokenizes a program into its expressions
 *
 * @param string  The program to tokenize
 * @return  An array of expressions that make up the program
 */
export const tokenize = string => Array.from(string.matchAll(MAX_PATTERN)).map(a => a[0]);

export const buildAST = tokens => {
  const stack = [ new expressions.Sequence() ];

  for (const token of tokens) {
    for (const rule of rules) {
      if (rule.pattern.test(token)) {
        const matchData = token.match(rule.pattern);
        rule.action({ stack, token, matchData });
        break;
      }
    }
  }

  if (stack.length > 1) {
    throw new ParseError(`Unmatched '${BEGIN_LOOP}'`);
  }

  return stack[0];
};

/**
 * Parses a program into an AST
 *
 * @param string  The program to parse
 * @return  an expressions.Sequence object, which is the root node in the AST
 */
export const parse = string => {
  return buildAST(tokenize(string));
};

export default parse;

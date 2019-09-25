/**
 * parsing/index.js
 *
 * Entry point for pixel program parsing. Defines high level parsing
 * functions:
 *
 * tokenize()
 * buildAST()
 * parse()
 */

import { BEGIN_LOOP } from './constants';
import { Sequence } from './expressions';
import { ParseError } from './exceptions';
import { MAX_PATTERN, rules } from './rules';

/**
 * Splits a string into recognizable tokens
 *
 * @param string  The program to tokenize
 * @return  An array of tokens that make up the program
 */
export const tokenize = string => Array.from(string.matchAll(MAX_PATTERN)).map(a => a[0]);

/**
 * Parses a program into an AST
 *
 * @param tokens  The tokens of the program to parse
 * @return  an expressions.Sequence object, which is the root node in the AST
 */
export const buildAST = tokens => {
  const stack = [ new Sequence() ];

  tokens.forEach(token => {
    const rule = rules.find(rule => rule.appliesTo(token));

    if (!rule) {
      throw new ParseError(`Unknown token ${token}`);
    }

    const matchData = rule.match(token);
    rule.apply({ stack, token, matchData });
  });

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
export const parse = string => buildAST(tokenize(string));

export default parse;

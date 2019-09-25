/**
 * rules.js
 *
 * Defines the rule system for the parser, as well as the rules for each
 * recognizable token
 */

import { BEGIN_LOOP, END_LOOP, END_OF_LINE } from './constants';
import { ParseError } from './exceptions';
import expressions from './expressions';

import { array_last, escape } from '@/util';

/**
 * Definition of a parsing rule
 *
 * Tests strings for matches to the rule, and executes actions on them.
 */
export class Rule {
  /**
   * Initializes the rule
   *
   * @param pattern  The pattern this rule matches. Should NOT include ^ and $
   *                 characters; the rule will handle this on its own.
   * @param action   A function that accepts an object argument, whose keys are
   *                 'stack', 'token', and 'matchData'
   */
  constructor(pattern, action) {
    if (!(pattern instanceof RegExp)) {
      throw new TypeError('First argument to `Rule` must be RegExp');
    }

    this._pattern = pattern;
    this.pattern = new RegExp(`^${pattern.source}$`);
    this.action = action;
  }

  /**
   * Determines if this rule applies to a given string
   *
   * @return true if the pattern matches exactly, and false otherwise
   */
  appliesTo(string) {
    return this.pattern.test(string);
  }

  /**
   * Runs a RegExp check against a string
   *
   * @return The MatchData object from the check if the pattern matches, and
   *         null if it doesn't.
   */
  match(string) {
    return string.match(this.pattern);
  }

  /**
   * Executes the Rule's action on an object
   *
   * @param data  The object to run the action on
   * @return void
   */
  apply(data) {
    this.action(data);
  }

  /**
   * Glues an array of Rules' patterns together
   *
   * @param rules  An array of Rule objects
   * @param flags  The flags to add to the resulting pattern
   * @return A RegExp object that is the concatenation of all of the `rules`
   */
  static merge(rules, flags) {
    const sources = rules.map(rule => rule._pattern.source);
    return new RegExp(sources.join('|'), flags);
  }
}

/**
 * Matches a basic pixel, with or without a number.
 * Adds a Pixel object to the last item in the stack.
 */
const basicTokenRule = new Rule(
  /(\d*)([a-z]+)/,

  ({ stack, matchData }) => {
    const n = parseInt(matchData[1] || 1);
    const c = matchData[2];

    array_last(stack).add(new expressions.Pixel(n, c));
  }
);

/**
 * Matches the beginning of a loop, with or without a number.
 * Creates a new Loop object and adds it to the last item in the stack, as well
 * as pushing the new loop onto the end of the stack.
 */
const beginLoopRule = new Rule(
  new RegExp(`(\\d*)${escape(BEGIN_LOOP)}`),

  ({ stack, matchData }) => {
    const n = parseInt(matchData[1] || 1);

    const loop = new expressions.Loop(n);
    array_last(stack).add(loop);
    stack.push(loop);
  }
);

/**
 * Matches the end of a loop.
 * Pops the last loop off the stack.
 */
const endLoopRule = new Rule(
  new RegExp(escape(END_LOOP)),

  ({ stack }) => {
    if (!(array_last(stack) instanceof expressions.Loop)) {
      throw new ParseError('Unexpected "]"');
    }

    stack.pop();
  }
);

/**
 * Matches a newline symbol.
 * Adds a Newline object to the last item in the stack.
 */
const endLineRule = new Rule(
  new RegExp(escape(END_OF_LINE)),

  ({ stack }) => {
    array_last(stack).add(new expressions.Newline());
  }
);

/**
 * Matches any other non-space character.
 * Raises an exception, since this shouldn't happen in a well-formed program.
 */
const illegalRule = new Rule(
  /\S+/,

  ({ token }) => {
    throw new ParseError(`Unexpected token '${token}'`);
  }
);

/**
 * The rules, in order
 */
export const rules = [
  basicTokenRule,
  beginLoopRule,
  endLoopRule,
  endLineRule,
  illegalRule
];

/**
 * A giant pattern used to detect all tokens in a program
 */
export const MAX_PATTERN = Rule.merge(rules, 'g');

export default rules;

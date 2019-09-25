import { BEGIN_LOOP, END_LOOP, END_OF_LINE } from '@/parsing/constants';
import { buildAST, tokenize } from '@/parsing';
import expressions from '@/parsing/expressions';
import { ParseError } from '@/parsing/exceptions';
import { Rule } from '@/parsing/rules';

describe('parse', () => {
  describe('Rule', () => {
    describe('#constructor()', () => {
      it('Raises an error if the first argument is not a pattern', () => {
        expect(() => new Rule(null)).toThrow(TypeError);
      });
    });

    describe('#appliesTo()', () => {
      it('returns `true` if its pattern matches a string', () => {
        const rule = new Rule(/a/);
        expect(rule.appliesTo('a')).toBe(true);
      });

      it('returns `false` if its pattern matches a string', () => {
        const rule = new Rule(/a/);
        expect(rule.appliesTo('b')).toBe(false);
      });

      it('returns `false` if its pattern doesn\'t match a string exactly', () => {
        const rule = new Rule(/a/);
        expect(rule.appliesTo('ab')).toBe(false);
      });
    });

    describe('#match()', () => {
      it('returns matchData if its pattern matches a string', () => {
        const rule = new Rule(/a/);
        expect(rule.match('a')).toEqual('a'.match(/a/));
      });

      it('returns `null` if its pattern matches a string', () => {
        const rule = new Rule(/a/);
        expect(rule.match('b')).toBe(null);
      });

      it('returns `null` if its pattern doesn\'t match a string exactly', () => {
        const rule = new Rule(/a/);
        expect(rule.match('ab')).toBe(null);
      });
    });

    describe('#apply()', () => {
      it('runs its action on its input', () => {
        const rule = new Rule(/a/, x => {
          x.push('hello');
        });
        const arr = [];
        rule.apply(arr);
        expect(arr).toEqual([ 'hello' ]);
      });
    });
  });

  describe('tokenize', () => {
    it('recognizes single characters', () => {
      const program = 'r';
      expect(tokenize(program)).toEqual([ 'r' ]);
    });

    it('recognizes numbered expressions', () => {
      const program = '3r';
      expect(tokenize(program)).toEqual([ '3r' ]);
    });

    it('recognizes newline markers', () => {
      const program = ';';
      expect(tokenize(program)).toEqual([ ';' ]);
    });

    it('recognizes expressions with newlines', () => {
      const program = '3r;';
      expect(tokenize(program)).toEqual([ '3r', ';' ]);
    });

    it('recognizes beginnings of loops', () => {
      const program = '[';
      expect(tokenize(program)).toEqual([ '[' ]);
    });

    it('recognizes ends of loops', () => {
      const program = ']';
      expect(tokenize(program)).toEqual([ ']' ]);
    });

    it('discards spaces', () => {
      const program = '3r             g\nb';
      expect(tokenize(program)).toEqual([ '3r', 'g', 'b' ]);
    });

    it('recognizes illegal sequences', () => {
      const program = '?!';
      expect(tokenize(program)).toEqual([ '?!' ]);
    });
  });

  describe('buildAST', () => {
    it('parses a single pixel', () => {
      const tokens = [ 'r' ];
      const target = new expressions.Sequence([
        new expressions.Pixel(1, 'r')
      ]);
      expect(buildAST(tokens)).toEqual(target);
    });

    it('parses a numbered pixel', () => {
      const tokens = [ '3r' ];
      const target = new expressions.Sequence([
        new expressions.Pixel(3, 'r')
      ]);
      expect(buildAST(tokens)).toEqual(target);
    });

    it('parses a newline', () => {
      const tokens = [ END_OF_LINE ];
      const target = new expressions.Sequence([
        new expressions.Newline()
      ]);
      expect(buildAST(tokens)).toEqual(target);
    });

    it('parses a series of expressions', () => {
      const tokens = [ 'r', '2b', END_OF_LINE ];
      const target = new expressions.Sequence([
        new expressions.Pixel(1, 'r'),
        new expressions.Pixel(2, 'b'),
        new expressions.Newline()
      ]);
      expect(buildAST(tokens)).toEqual(target);
    });

    it('parses a pair of brackets', () => {
      const tokens = [ BEGIN_LOOP, END_LOOP ];
      const target = new expressions.Sequence([
        new expressions.Loop(1)
      ]);
      expect(buildAST(tokens)).toEqual(target);
    });

    it('parses a pair of numbered brackets', () => {
      const tokens = [ `2${BEGIN_LOOP}`, END_LOOP ];
      const target = new expressions.Sequence([
        new expressions.Loop(2)
      ]);
      expect(buildAST(tokens)).toEqual(target);
    });

    it('parses an expression in a loop', () => {
      const tokens = [ BEGIN_LOOP, '3r', END_LOOP ];
      const target = new expressions.Sequence([
        new expressions.Loop(1, [
          new expressions.Pixel(3, 'r')
        ])
      ]);
      expect(buildAST(tokens)).toEqual(target);
    });

    it('parses multiple expressions in a loop', () => {
      const tokens = [ `4${BEGIN_LOOP}`, '3r', 'b', END_OF_LINE, END_LOOP ];
      const target = new expressions.Sequence([
        new expressions.Loop(4, [
          new expressions.Pixel(3, 'r'),
          new expressions.Pixel(1, 'b'),
          new expressions.Newline()
        ])
      ]);
      expect(buildAST(tokens)).toEqual(target);
    });

    it('raises an error on illegal tokens', () => {
      const tokens = [ '?' ];
      expect(() => buildAST(tokens)).toThrow(ParseError);
    });

    it('raises an error on illegal unmatched tokens', () => {
      const tokens = [ 'ab cad 3rd' ];
      expect(() => buildAST(tokens)).toThrow(ParseError);
    });

    it('raises an error on an unmatched closing bracket', () => {
      const tokens = [ END_LOOP ];
      expect(() => buildAST(tokens)).toThrow(ParseError);
    });

    it('raises an error on an unmatched opening bracket', () => {
      const tokens = [ BEGIN_LOOP ];
      expect(() => buildAST(tokens)).toThrow(ParseError);
    });
  });
});

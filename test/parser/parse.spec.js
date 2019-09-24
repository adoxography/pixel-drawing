import { ParseError, buildAST } from '@/parser';
import expressions from '@/parser/expressions';

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
    const tokens = [ ';' ];
    const target = new expressions.Sequence([
      new expressions.Newline()
    ]);
    expect(buildAST(tokens)).toEqual(target);
  });

  it('parses a series of expressions', () => {
    const tokens = [ 'r', '2b', ';' ];
    const target = new expressions.Sequence([
      new expressions.Pixel(1, 'r'),
      new expressions.Pixel(2, 'b'),
      new expressions.Newline()
    ]);
    expect(buildAST(tokens)).toEqual(target);
  });

  it('parses a pair of brackets', () => {
    const tokens = [ '[', ']' ];
    const target = new expressions.Sequence([
      new expressions.Loop(1)
    ]);
    expect(buildAST(tokens)).toEqual(target);
  });

  it('parses a pair of numbered brackets', () => {
    const tokens = [ '2[', ']' ];
    const target = new expressions.Sequence([
      new expressions.Loop(2)
    ]);
    expect(buildAST(tokens)).toEqual(target);
  });

  it('parses an expression in a loop', () => {
    const tokens = [ '[', '3r', ']' ];
    const target = new expressions.Sequence([
      new expressions.Loop(1, [
        new expressions.Pixel(3, 'r')
      ])
    ]);
    expect(buildAST(tokens)).toEqual(target);
  });

  it('parses multiple expressions in a loop', () => {
    const tokens = [ '4[', '3r', 'b', ';', ']' ];
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

  it('raises an error on an unmatched closing bracket', () => {
    const tokens = [ ']' ];
    expect(() => buildAST(tokens)).toThrow(ParseError);
  });

  it('raises an error on an unmatched opening bracket', () => {
    const tokens = [ '[' ];
    expect(() => buildAST(tokens)).toThrow(ParseError);
  });
});

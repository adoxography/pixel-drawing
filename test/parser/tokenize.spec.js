import { tokenize } from '@/parser';

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

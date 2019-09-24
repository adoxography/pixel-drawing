import { Loop, Newline, Pixel, Sequence } from '@/parser/expressions';

describe('Sequence', () => {
  describe('#constructor()', () => {
    it('initializes with an empty commands list by default', () => {
      const sequence = new Sequence();
      expect(sequence.commands).toBeInstanceOf(Array);
      expect(sequence.commands).toEqual([]);
    });

    it('accepts expressions when instantiating', () => {
      const pixel = new Pixel(3, 'r');
      const sequence = new Sequence([ pixel ]);
      expect(sequence.commands).toEqual([ pixel ]);
    });
  });

  describe('#length', () => {
    it('returns the number of commands', () => {
      const sequence = new Sequence([ new Pixel(1, 'r') ]);
      expect(sequence.length).toBe(1);
    });
  });

  describe('#add()', () => {
    it('adds a command to its list', () => {
      const pixel = new Pixel(1, 'r');
      const sequence = new Sequence();
      sequence.add(pixel);
      expect(sequence.commands).toEqual([ pixel ]);
    });
  });

  describe('#toArray()', () => {
    it('returns an array of all commands inside it', () => {
      const sequence = new Sequence([
        new Pixel(3, 'r'),
        new Pixel(1, 'b'),
        new Newline(),
        new Loop(2, [
          new Pixel(2, 'g'),
          new Newline()
        ])
      ]);

      const target = [
        'r', 'r', 'r',
        'b',
        null,
        'g', 'g', null, 'g', 'g', null
      ];

      expect(sequence.toArray()).toEqual(target);
    });
  });
});

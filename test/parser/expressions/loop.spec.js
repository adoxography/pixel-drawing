import { Loop, Newline, Pixel, Sequence } from '@/parser/expressions';

describe('Loop', () => {
  describe('#constructor', () => {
    it('defaults to looping 1 time', () => {
      const loop = new Loop();
      expect(loop.number).toBe(1);
    });

    it('initializes with an empty program by default', () => {
      const loop = new Loop();
      expect(loop.program).toBeInstanceOf(Sequence);
      expect(loop.program).toEqual(new Sequence());
    });

    it('passes expressions on to its program', () => {
      const pixel = new Pixel(1, 'r');
      const loop = new Loop(1, [ pixel ]);
      expect(loop.program.commands).toEqual([ pixel ]);
    });
  });

  describe('#add()', () => {
    it('adds a command to its program\'s list', () => {
      const pixel = new Pixel(1, 'r');
      const loop = new Loop();
      loop.add(pixel);
      expect(loop.program.commands).toEqual([ pixel ]);
    });
  });

  describe('#toArray()', () => {
    it('returns an array of all commands inside it', () => {
      const loop = new Loop(2, [
        new Pixel(3, 'r'),
        new Pixel(1, 'b'),
        new Newline(),
        new Loop(2, [
          new Pixel(1, 'g'),
          new Newline()
        ])
      ]);

      const target = [
        'r', 'r', 'r',
        'b',
        null,
        'g', null, 'g', null,
        'r', 'r', 'r',
        'b',
        null,
        'g', null, 'g', null
      ];

      expect(loop.toArray()).toEqual(target);
    });
  });
});

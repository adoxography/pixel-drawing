import { Loop, Newline, Pixel, Sequence } from '@/parsing/expressions';

describe('AST expressions', () => {
  describe('Pixel', () => {
    describe('#toArray()', () => {
      it('creates an array of pixels', () => {
        const pixel = new Pixel(3, 'r');
        expect(pixel.toArray()).toEqual([ 'r', 'r', 'r' ]);
      });
    });
  });

  describe('Newline', () => {
    describe('#toArray()', () => {
      it('returns an array only containing null', () => {
        const newline = new Newline();
        expect(newline.toArray()).toEqual([ null ]);
      });
    });
  });

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
});

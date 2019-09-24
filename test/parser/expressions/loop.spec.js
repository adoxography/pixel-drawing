import { Loop, Pixel, Sequence } from '@/parser/expressions';

describe('Loop', () => {
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

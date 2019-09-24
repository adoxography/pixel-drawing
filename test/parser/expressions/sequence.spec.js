import { Pixel, Sequence } from '@/parser/expressions';

describe('Sequence', () => {
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

import { Pixel } from '@/parser/expressions';

describe('Pixel', () => {
  describe('#toArray()', () => {
    it('creates an array of pixels', () => {
      const pixel = new Pixel(3, 'r');
      expect(pixel.toArray()).toEqual([ 'r', 'r', 'r' ]);
    });
  });
});

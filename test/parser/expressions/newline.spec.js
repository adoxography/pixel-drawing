import { Newline } from '@/parser/expressions';

describe('Newline', () => {
  describe('#toArray()', () => {
    it('returns an array only containing null', () => {
      const newline = new Newline();
      expect(newline.toArray()).toEqual([ null ]);
    });
  });
});

const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-strings values', () => {
    const isString = isRealString(123);
    expect(isString).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    const isString = isRealString('     ');
    expect(isString).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    const isString = isRealString(' test   ');
    expect(isString).toBe(true);
  });
});

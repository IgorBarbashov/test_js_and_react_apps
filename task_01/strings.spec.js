import {toUpper, toLower, len} from './strings';

describe('Strings module', () => {
  describe('toUpper', () => {
    test('should convert all character to uppercase', () => {
      const string = 'hello world';

      const actual = toUpper(string);

      expect(actual).toBe("HELLO WORLD");
    })
  });

  describe('toLower', () => {
    test('should convert all character to lowercase', () => {
      const string = 'HELLO WORLD';

      const actual = toLower(string);

      expect(actual).toBe('hello world');
    })
  });

  describe('len', () => {
    test('should length of the given string', () => {
      const string = 'HELLO WORLD';

      const actual = len(string);

      expect(actual).toBe(11);
    })
  });
});

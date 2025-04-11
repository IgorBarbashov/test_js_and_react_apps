import {getArrayLength} from './aliases';

describe('getArrayLength', () => {
  test('should return 0 for an empty array', () => {
    const actual = getArrayLength([]);

    expect(actual).toEqual(0);
  });

  fit('should return 3 for an array with 3 elements', () => {
    const actual = getArrayLength([1, 2, 3]);

    expect(actual).toEqual(3);
  });

  test.todo('should return 5 for an array with 5 elements');

  test.only('should return 10 for an array with 10 elements includes empty elements', () => {
    const actual = getArrayLength([, 9, , 7, , 5, , 3, , 1]);

    expect(actual).toEqual(10);
  });
});

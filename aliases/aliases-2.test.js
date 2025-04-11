import {getArrayLength} from './aliases';

describe('getArrayLength - skip failed test', () => {
  test.skip('should return -1 for an empty array', () => {
    const actual = getArrayLength([]);

    expect(actual).toEqual(-1);
  });
});
import {multiply} from './multiply';

describe('Multiply', () => {
  test.each([
    {valueA: 10, valueB: 3, expected: 30},
    {valueA: 20, valueB: 5, expected: 100},
    {valueA: 1.5, valueB: 1.5, expected: 2.25}
  ])('should multiply $valueA by $valueB and expect $expected', ({valueA, valueB, expected}) => {
    const res = multiply(valueA, valueB);
    expect(res).toBe(expected);
  });
});

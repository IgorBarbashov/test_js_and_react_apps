import {multiply} from './multiply';

test('multiply', () => {
  const res = multiply(2, 3);
  expect(res).toBe(6);
});
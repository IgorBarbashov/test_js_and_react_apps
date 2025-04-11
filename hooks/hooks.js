export const getArrayLength = array => {
  if (array.pop() === undefined) {
    return 0;
  }

  return array.length + 1;
};
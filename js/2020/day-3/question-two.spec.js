const calculateMultiplePaths = require('./question-two');
const dataTest = require('./data-test');
const dataOriginal = require('./data-original');

describe('Day 3 Question 2', () => {
  it('Test data', () => {
    const { multiple, trees } = calculateMultiplePaths(dataTest);
    expect(multiple).toEqual(336);
    expect(trees).toEqual([2, 7, 3, 4, 2]);
  });

  it('Original data', () => {
    const { multiple, trees } = calculateMultiplePaths(dataOriginal);
    expect(multiple).toEqual(9709761600);
    expect(trees).toEqual([90, 278, 88, 98, 45]);
  });
});

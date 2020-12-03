const calculateTrees = require('./question-one');
const dataTest = require('./data-test');
const dataOriginal = require('./data-original');

describe('Day 3 Question 1', () => {
  it('Test data', () => {
    expect(calculateTrees(dataTest)).toEqual(7);
  });

  it('Original data', () => {
    expect(calculateTrees(dataTest)).toEqual(7);
  });
});

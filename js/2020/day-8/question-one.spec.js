const findAccumulatorBeforeLoop = require('./question-one');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 8 Question 1', () => {
  it('Test data', () => {
    expect(findAccumulatorBeforeLoop(dataTest)).toEqual(5);
  });

  it('Original data', () => {
    expect(findAccumulatorBeforeLoop(data)).toEqual(2051);
  });
});

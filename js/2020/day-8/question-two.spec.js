const findAccumulatorFixLoop = require('./question-two');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 8 Question 2', () => {
  it('Test data', () => {
    expect(findAccumulatorFixLoop(dataTest)).toEqual(8);
  });

  it('Original data', () => {
    expect(findAccumulatorFixLoop(data)).toEqual(2304);
  });
});

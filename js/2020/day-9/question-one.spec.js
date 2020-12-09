const findWeakNumber = require('./question-one');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 9 Question 1', () => {
  it('Test data', () => {
    expect(findWeakNumber(dataTest, 5)).toEqual(127);
  });

  it('Original data', () => {
    expect(findWeakNumber(data, 25)).toEqual(1038347917);
  });
});

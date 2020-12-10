const findCombinations = require('./question-two');
const dataTest = require('./data-test');
const dataTest2 = require('./data-test-2');
const data = require('./data');

describe('Day 10 Question 2', () => {
  it('Test data', () => {
    expect(findCombinations(dataTest)).toEqual(8);
  });

  it('Test data 2', () => {
    expect(findCombinations(dataTest2)).toEqual(19208);
  });

  it('Original data', () => {
    expect(findCombinations(data)).toEqual(169255295254528);
  });
});

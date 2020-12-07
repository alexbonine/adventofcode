const findInnerBagsCount = require('./question-two');
const dataTest = require('./data-test');
const dataTest2 = require('./data-test-2');
const data = require('./data');

describe('Day 7 Question 2', () => {
  it('Test data', () => {
    expect(findInnerBagsCount(dataTest, 'shiny gold')).toEqual(32);
  });

  it('Test data 2', () => {
    expect(findInnerBagsCount(dataTest2, 'shiny gold')).toEqual(126);
  });

  it('Original data', () => {
    expect(findInnerBagsCount(data, 'shiny gold')).toEqual(158493);
  });
});

const countValidPassports = require('./question-one');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 4 Question 1', () => {
  it('Test data', () => {
    expect(countValidPassports(dataTest)).toEqual(2);
  });

  it('Original data', () => {
    expect(countValidPassports(data)).toEqual(200);
  });
});

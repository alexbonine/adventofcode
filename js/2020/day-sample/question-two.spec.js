const fn = require('./question-two');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 4 Question 2', () => {
  it('Test data', () => {
    expect(fn(dataTest)).toEqual(null);
  });

  it('Original data', () => {
    expect(fn(data)).toEqual(null);
  });
});

const fn = require('./question-one');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 4 Question 1', () => {
  it('Test data', () => {
    expect(fn(dataTest)).toEqual(null);
  });

  it('Original data', () => {
    expect(fn(data)).toEqual(null);
  });
});

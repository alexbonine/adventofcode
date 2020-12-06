const countAllQuestions = require('./question-two');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 6 Question 2', () => {
  it('Test data', () => {
    expect(countAllQuestions(dataTest)).toEqual(6);
  });

  it('Original data', () => {
    expect(countAllQuestions(data)).toEqual(3039);
  });
});

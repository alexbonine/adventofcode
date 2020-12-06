const countQuestions = require('./question-one');
const { parseGroupsQuestionsMap } = require('./helpers');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 6 Question 1', () => {
  it('Test data parsed counts', () => {
    expect(parseGroupsQuestionsMap(dataTest)).toEqual([
      { personCount: 1, questions: { a: 1, b: 1, c: 1 } },
      { personCount: 3, questions: { a: 1, b: 1, c: 1 } },
      { personCount: 2, questions: { a: 2, b: 1, c: 1 } },
      { personCount: 4, questions: { a: 4 } },
      { personCount: 1, questions: { b: 1 } },
    ]);
  });

  it('Test data', () => {
    expect(countQuestions(dataTest)).toEqual(11);
  });

  it('Original data', () => {
    expect(countQuestions(data)).toEqual(6387);
  });
});

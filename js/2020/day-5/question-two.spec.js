const findMissingSeatId = require('./question-two');
const data = require('./data');

describe('Day 4 Question 2', () => {
  it('Original data', () => {
    expect(findMissingSeatId(data)).toEqual(727);
  });
});

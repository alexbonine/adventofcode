const countFilledSeats = require('./question-one');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 11 Question 1', () => {
  it('Test data output', () => {
    expect(countFilledSeats(dataTest)).toEqual(37);
  });

  it('Original data', () => {
    expect(countFilledSeats(data)).toEqual(2296);
  });
});

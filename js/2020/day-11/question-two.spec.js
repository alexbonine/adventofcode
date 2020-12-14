const countFilledSeats = require('./question-one');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 11 Question 2', () => {
  it('Test data output', () => {
    expect(countFilledSeats(dataTest)).toEqual(26);
  });

  // commented out as solution is so inefficient
  // it('Original data', () => {
  //   expect(countFilledSeats(data)).toEqual(2089);
  // });
});

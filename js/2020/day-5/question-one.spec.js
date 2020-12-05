const findHighestSeatId = require('./question-one');
const { parseSeats } = require('./helpers');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 4 Question 1', () => {
  it('Test data parseSeats', () => {
    expect(parseSeats(dataTest)).toEqual([
      { seatId: 357, row: 44, column: 5 },
      { seatId: 567, row: 70, column: 7 },
      { seatId: 119, row: 14, column: 7 },
      { seatId: 820, row: 102, column: 4 },
    ]);
  });

  it('Test data', () => {
    expect(findHighestSeatId(dataTest)).toEqual(820);
  });

  it('Original data', () => {
    expect(findHighestSeatId(data)).toEqual(978);
  });
});

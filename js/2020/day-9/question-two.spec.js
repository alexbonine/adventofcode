const findAdditionSeries = require('./question-two');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 9 Question 2', () => {
  it('Test data', () => {
    expect(findAdditionSeries(dataTest, 127)).toEqual(62);
  });

  it('Original data', () => {
    expect(findAdditionSeries(data, 1038347917)).toEqual(137394018);
  });
});

const findJoltDifferences = require('./question-one');
const dataTest = require('./data-test');
const dataTest2 = require('./data-test-2');
const data = require('./data');

describe('Day 10 Question 1', () => {
  it('Test data', () => {
    const differences = findJoltDifferences(dataTest);
    expect(differences).toEqual({ 1: 7, 2: 0, 3: 5 });
    expect(differences[1] * differences[3]).toEqual(35);
  });

  it('Test data 2', () => {
    const differences = findJoltDifferences(dataTest2);
    expect(differences).toEqual({ 1: 22, 2: 0, 3: 10 });
    expect(differences[1] * differences[3]).toEqual(220);
  });

  it('Original data', () => {
    const differences = findJoltDifferences(data);
    expect(differences).toEqual({ 1: 71, 2: 0, 3: 31 });
    expect(differences[1] * differences[3]).toEqual(2201);
  });
});

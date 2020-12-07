const findParentBagsCount = require('./question-one');
const { parseBagMaps } = require('./helpers');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 7 Question 1', () => {
  it('parseBagMaps', () => {
    expect(parseBagMaps(dataTest)).toEqual({
      'light-red': { 'bright-white': 1, 'muted-yellow': 2 },
      'dark-orange': { 'bright-white': 3, 'muted-yellow': 4 },
      'bright-white': { 'shiny-gold': 1 },
      'muted-yellow': { 'shiny-gold': 2, 'faded-blue': 9 },
      'shiny-gold': { 'dark-olive': 1, 'vibrant-plum': 2 },
      'dark-olive': { 'faded-blue': 3, 'dotted-black': 4 },
      'vibrant-plum': { 'faded-blue': 5, 'dotted-black': 6 },
      'faded-blue': {},
      'dotted-black': {},
    });
  });

  it('Test data', () => {
    expect(findParentBagsCount(dataTest, 'shiny gold')).toEqual(4);
  });

  it('Original data', () => {
    expect(findParentBagsCount(data, 'shiny gold')).toEqual(235);
  });
});

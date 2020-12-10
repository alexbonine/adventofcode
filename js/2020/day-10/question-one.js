// const { toArray } = require('./helpers');

const findJoltDifferences = (dataOriginal) => {
  const data = dataOriginal
    .split('\n')
    .map((item) => +item)
    .sort((a, b) => (a < b ? -1 : 1));
  data.push(data[data.length - 1] + 3);
  const differences = { 1: 0, 2: 0, 3: 0 };
  let prev = 0;

  for (let i = 0; i < data.length; i += 1) {
    differences[data[i] - prev] += 1;
    prev = data[i];
  }

  return differences;
};

// Debugging
// console.log(findJoltDifferences(require('./data')));

module.exports = findJoltDifferences;

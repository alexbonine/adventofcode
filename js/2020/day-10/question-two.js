// const { toArray } = require('./helpers');

const countSequences = (seriesLength) => {
  if (seriesLength <= 2) {
    return 1;
  } else if (seriesLength === 3) {
    return 2;
  } else if (seriesLength === 4) {
    return 4;
  }

  return (
    countSequences(seriesLength - 1) +
    countSequences(seriesLength - 2) +
    countSequences(seriesLength - 3)
  );
};

const findCombinations = (dataOriginal) => {
  const data = dataOriginal
    .split('\n')
    .map((item) => +item)
    .sort((a, b) => (a < b ? -1 : 1));
  data.push(data[data.length - 1] + 3);
  data.unshift(0);
  const diffByThree = [];
  let prevJolt = 0;
  let startByThree = 0;

  for (let i = 0; i < data.length; i += 1) {
    const joltDifference = data[i] - prevJolt;
    prevJolt = data[i];

    if (joltDifference === 3) {
      diffByThree.push(data.slice(startByThree, i));
      startByThree = i;
    }
  }

  const sequenceCounts = diffByThree.map((series) =>
    countSequences(series.length)
  );

  return sequenceCounts.reduce((accum, count) => accum * count, 1);
};

// Debugging
// console.log(findCombinations(require('./data')));

module.exports = findCombinations;

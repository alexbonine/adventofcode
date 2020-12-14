const { runRules } = require('./helpers');

const countAdjacents = (data, row, column) => {
  let adjacents = 0;

  // above left
  if (row > 0 && column > 0 && data[row - 1][column - 1] === '#') {
    adjacents += 1;
  }

  // above
  if (row > 0 && data[row - 1][column] === '#') {
    adjacents += 1;
  }

  // above right
  if (
    row > 0 &&
    column < data[row].length - 1 &&
    data[row - 1][column + 1] === '#'
  ) {
    adjacents += 1;
  }

  // left
  if (column > 0 && data[row][column - 1] === '#') {
    adjacents += 1;
  }

  // right
  if (column < data[row].length - 1 && data[row][column + 1] === '#') {
    adjacents += 1;
  }

  // bottom left
  if (
    row < data.length - 1 &&
    column > 0 &&
    data[row + 1][column - 1] === '#'
  ) {
    adjacents += 1;
  }

  // bottom
  if (row < data.length - 1 && data[row + 1][column] === '#') {
    adjacents += 1;
  }

  // bottom right
  if (
    row < data.length - 1 &&
    column < data[row].length - 1 &&
    data[row + 1][column + 1] === '#'
  ) {
    adjacents += 1;
  }

  return adjacents;
};

const processData = (data) => {
  let didChange = false;
  let updated = [];

  for (let i = 0; i < data.length; i += 1) {
    updated.push([]);
    const row = data[i];

    for (let j = 0; j < row.length; j += 1) {
      const item = row[j];

      let adjacents = countAdjacents(data, i, j);

      if (item === 'L' && adjacents === 0) {
        didChange = true;
        updated[i][j] = '#';
      } else if (item === '#' && adjacents >= 4) {
        didChange = true;
        updated[i][j] = 'L';
      } else {
        updated[i][j] = item;
      }
    }
  }

  return { data: updated, didChange };
};

const countFilledSeats = (dataOriginal) => {
  const data = runRules(dataOriginal, processData);

  return data.reduce(
    (accum, row) =>
      accum + row.reduce((accum, item) => accum + (item === '#' ? 1 : 0), 0),
    0
  );
};

// Debugging
// console.log(countFilledSeats(require('./data')));

module.exports = countFilledSeats;

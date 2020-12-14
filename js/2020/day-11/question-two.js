const { runRules } = require('./helpers');

const loopTilFound = (data, row, column, { above, below, left, right }) => {
  const getNextRow = (r) => {
    if (above) {
      return r - 1;
    } else if (below) {
      return r + 1;
    }

    return r;
  };

  const getNextColumn = (c) => {
    if (left) {
      return c - 1;
    } else if (right) {
      return c + 1;
    }

    return c;
  };

  let nextRow = getNextRow(row);
  let nextColumn = getNextColumn(column);

  while (data[nextRow] && data[nextRow][nextColumn] === '.') {
    nextRow = getNextRow(nextRow);
    nextColumn = getNextColumn(nextColumn);
  }

  return data[nextRow] ? data[nextRow][nextColumn] === '#' : false;
};

const countAdjacents = (data, row, column) => {
  let adjacents = 0;
  const above = row > 0;
  const below = row < data.length - 1;
  const left = column > 0;
  const right = column < data[row].length - 1;

  if (above && left && loopTilFound(data, row, column, { above, left })) {
    adjacents += 1;
  }

  if (above && loopTilFound(data, row, column, { above })) {
    adjacents += 1;
  }

  if (above && right && loopTilFound(data, row, column, { above, right })) {
    adjacents += 1;
  }

  if (left && loopTilFound(data, row, column, { left })) {
    adjacents += 1;
  }

  if (right && loopTilFound(data, row, column, { right })) {
    adjacents += 1;
  }

  if (below && left && loopTilFound(data, row, column, { below, left })) {
    adjacents += 1;
  }

  if (below && loopTilFound(data, row, column, { below })) {
    adjacents += 1;
  }

  if (below && right && loopTilFound(data, row, column, { below, right })) {
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

      if (item === '.') {
        updated[i][j] = item;
        continue;
      }

      let adjacents = countAdjacents(data, i, j);

      if (item === 'L' && adjacents === 0) {
        didChange = true;
        updated[i][j] = '#';
      } else if (item === '#' && adjacents >= 5) {
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
console.log(countFilledSeats(require('./data')));

module.exports = countFilledSeats;

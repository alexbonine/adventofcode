const { toArray } = require('./helpers');

const calculateTrees = (dataOriginal, right = 3, down = 1) => {
  const data = toArray(dataOriginal);
  const trees = [];
  const baseWidth = data[0].length;
  let width = 0;

  for (let row = down; row < data.length; row += down) {
    width += right;
    const column = width % baseWidth;

    if (data[row][column]) {
      trees.push({ row, column });
    }
  }

  return trees.length;
};

// Debugging
// console.log(calculateTrees(require('./data-original')));

module.exports = calculateTrees;

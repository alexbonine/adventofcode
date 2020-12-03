const calculateTrees = require('./question-one');

const calculateMultiplePaths = (data) => {
  const paths = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  const trees = paths.map(({ right, down }) =>
    calculateTrees(data, right, down)
  );

  return {
    multiple: trees.reduce((accum, tree) => accum * tree, 1),
    paths: paths.map((path, index) => ({ ...path, trees: trees[index] })),
    trees,
  };
};

// Debugging
// console.log(JSON.stringify(calculateMultiplePaths(require('./data-original'))));

module.exports = calculateMultiplePaths;

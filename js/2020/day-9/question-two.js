const findAdditionSeries = (dataOriginal, target) => {
  const data = dataOriginal.split('\n').map((item) => +item);
  let right = data.findIndex((item) => item === target) - 1;
  let left;

  while (right >= 0) {
    left = right - 1;
    let remaining = target - data[right];

    while (data[left] < remaining) {
      remaining -= data[left];
      left -= 1;
    }

    if (data[left] === remaining) {
      break;
    }

    right -= 1;
  }

  const range = data.slice(left, right + 1);

  return Math.max(...range) + Math.min(...range);
};

// Debugging
// console.log(findAdditionSeries(require('./data'), 1038347917));

module.exports = findAdditionSeries;

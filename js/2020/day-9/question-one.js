const findWeakNumber = (dataOriginal, preamble) => {
  const data = dataOriginal.split('\n');
  const preambleList = [];
  const preambleMap = {};

  for (let i = 0; i < data.length; i += 1) {
    const current = +data[i];

    if (i < preamble) {
      preambleMap[current] = true;
      preambleList.push(current);
      continue;
    }

    const found = preambleList.some((preambleItem) => {
      const val = current - preambleItem;

      return preambleItem !== val && preambleMap[val];
    });

    if (!found) {
      return current;
    }

    preambleMap[current] = true;
    delete preambleMap[data[i - preamble]];

    preambleList.push(current);
    preambleList.shift();
  }

  return null;
};

// Debugging
// console.log(findWeakNumber(require('./data'), 25));

module.exports = findWeakNumber;

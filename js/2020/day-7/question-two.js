const { getBagColorKey, parseBagMaps } = require('./helpers');

const findInnerBagsCount = (dataOriginal, bagColor) => {
  const bagColorKey = getBagColorKey(bagColor);
  const bagMaps = parseBagMaps(dataOriginal);

  const bagsToCount = [bagColorKey];
  let count = 0;

  while (bagsToCount.length) {
    const bagKey = bagsToCount.shift();
    const bagMap = bagMaps[bagKey];

    Object.keys(bagMap).forEach((key) => {
      for (let i = 0; i < bagMap[key]; i += 1) {
        count += 1;
        bagsToCount.push(key);
      }
    });
  }

  return count;
};

// Debugging
// console.log(findInnerBagsCount(require('./data'), 'shiny gold'));

module.exports = findInnerBagsCount;

const { getBagColorKey, parseBagMaps } = require('./helpers');

const setupRecurseBag = (searchKey, bagMaps, all = {}, hits = {}) => (
  key,
  recurseBag,
  path = []
) => {
  if (all[key]) {
    if (hits[key]) {
      path.forEach((pathKey) => {
        hits[pathKey] = true;
      });
    }
    return hits;
  }

  all[key] = true;
  const bagMap = bagMaps[key];

  if (bagMap[searchKey]) {
    hits[key] = true;

    path.forEach((pathKey) => {
      hits[pathKey] = true;
    });

    return hits;
  }

  Object.keys(bagMap).forEach((childKey) => {
    recurseBag(childKey, recurseBag, [...path, key]);
  });

  return hits;
};

const findParentBagsCount = (dataOriginal, bagColor) => {
  const bagColorKey = getBagColorKey(bagColor);
  const bagMaps = parseBagMaps(dataOriginal);
  const recurseBag = setupRecurseBag(bagColorKey, bagMaps);
  let hits;

  Object.keys(bagMaps).forEach((parentBagKey) => {
    hits = recurseBag(parentBagKey, recurseBag);
  });

  return Object.keys(hits).length;
};

// Debugging
// console.log(findParentBagsCount(require('./data'), 'shiny gold'));

module.exports = findParentBagsCount;

const { parsePassports } = require('./helpers');

const countValidPassports = (data) => {
  const passports = parsePassports(data);

  return passports.reduce((accum, { keysMap }, index) => {
    if (
      ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every(
        (key) => keysMap[key]
      )
    ) {
      accum.push(index);
    }

    return accum;
  }, []).length;
};

// Debugging
// console.log(countValidPassports(require('./data')));

module.exports = countValidPassports;

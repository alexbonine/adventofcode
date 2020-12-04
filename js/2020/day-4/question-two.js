const { parsePassports, numberBetween } = require('./helpers');

const setupValidateField = (keysMap) => (key) => {
  const value = keysMap[key];

  if (!value) {
    return false;
  }

  switch (key) {
    case 'byr':
      return numberBetween(value, 1920, 2002);
    case 'iyr':
      return numberBetween(value, 2010, 2020);
    case 'eyr':
      return numberBetween(value, 2020, 2030);
    case 'hgt':
      const values = value.match(/(\d\d\d?)(in|cm)/i);
      const [_ignore, num, sys] = values || [];

      if (sys === 'cm') {
        return numberBetween(num, 150, 193);
      } else if (sys === 'in') {
        return numberBetween(num, 59, 76);
      }

      return false;
    case 'hcl':
      return /#[\dabcdef]{6}/.test(value);
    case 'ecl':
      return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(
        (val) => value === val
      );
    case 'pid':
      return /^\d{9}$/.test(value);
    case 'cid':
      return true;
    default:
      return false;
  }
};

const countValidPassports = (data) => {
  const passports = parsePassports(data);

  return passports.reduce((accum, { keysMap }, index) => {
    const validateField = setupValidateField(keysMap);

    if (
      ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every(validateField)
    ) {
      accum.push(index);
    }

    return accum;
  }, []).length;
};

// Debugging
// console.log(countValidPassports(require('./data')));

module.exports = { countValidPassports, setupValidateField };

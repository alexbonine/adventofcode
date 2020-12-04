const trim = (str = '') => str.trim().toLowerCase();

const parsePassports = (data) => {
  const passports = data.split('\n\n');

  return passports.map((passportStr) => {
    const matches = passportStr.match(/([^:]*:[^\s]*)/gim);
    const fields = [];
    const keysMap = {};

    for (let i = 0; i < matches.length; i += 1) {
      const split = matches[i].split(':');
      const key = trim(split[0]);
      const value = trim(split[1]);

      if (value) {
        fields.push({ key, value });
        keysMap[key] = value;
      }
    }

    return { fields, keysMap };
  });
};

const numberBetween = (value, min, max) => {
  const year = parseInt(value, 10);

  return value >= min && value <= max;
};

module.exports = { parsePassports, numberBetween };

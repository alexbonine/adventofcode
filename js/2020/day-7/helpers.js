const getBagColorKey = (bagColor) => bagColor.replace(/ /g, '-');

const parseBagMaps = (data) => {
  return data.split(/\.\n?/).reduce((accum, line) => {
    if (!line) {
      return accum;
    }

    const key = getBagColorKey(line.match(/(.+?)(?= bags)/i)[0]);
    accum[key] = line
      .match(/bags contain (.*)/i)[1]
      .split(/bags?,/)
      .reduce((accum2, str) => {
        const match = str
          .replace(/bags?/, '')
          .trim()
          .match(/^(\d+) (.*)$/i);

        if (match) {
          const [_ignore, count, type] = match;
          accum2[getBagColorKey(type)] = +count;
        }

        return accum2;
      }, {});

    return accum;
  }, {});
};

module.exports = { getBagColorKey, parseBagMaps };

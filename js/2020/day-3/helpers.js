const toArray = (original) => {
  const formatted = [[]];
  let row = 0;

  [...original].forEach((char) => {
    switch (char) {
      case '#':
        formatted[row].push(1);
        break;
      case '.':
        formatted[row].push(0);
        break;
      case '\n':
      case '\r':
      case '\n\n':
      case '\r\n':
      default:
        row += 1;
        formatted.push([]);
        break;
    }
  });

  return formatted;
};

module.exports = {
  toArray,
};

const trim = (str = '') => str.trim().toLowerCase();

const getSeatId = (row, column) => row * 8 + column;

const recurseSeat = (seatStr, lowerChar, lowerBound, upperBound) => {
  if (seatStr.length === 1) {
    return seatStr === lowerChar ? lowerBound : upperBound;
  }

  const half = (upperBound + 1 - lowerBound) / 2;

  if (seatStr[0] === lowerChar) {
    return recurseSeat(
      seatStr.slice(1),
      lowerChar,
      lowerBound,
      lowerBound + half - 1
    );
  }

  return recurseSeat(
    seatStr.slice(1),
    lowerChar,
    lowerBound + half,
    upperBound
  );
};

const refineSeat = (seatStr, lowerChar) =>
  recurseSeat(seatStr, lowerChar, 0, 2 ** seatStr.length - 1);

const parseSeats = (data) => {
  return data.split('\n').map((seatStr) => {
    const row = refineSeat(seatStr.slice(0, 7), 'F');
    const column = refineSeat(seatStr.slice(7), 'L');

    return {
      row,
      column,
      seatId: getSeatId(row, column),
    };
  });
};

module.exports = { parseSeats };

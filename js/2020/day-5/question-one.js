const { parseSeats } = require('./helpers');

const findHighestSeatId = (dataOriginal) => {
  const seats = parseSeats(dataOriginal);

  return Math.max(...seats.map(({ seatId }) => seatId));
};

// Debugging
// console.log(findHighestSeatId(require('./data')));

module.exports = findHighestSeatId;

const { parseSeats } = require('./helpers');

const findMissingSeatId = (dataOriginal) => {
  const seats = parseSeats(dataOriginal);
  const orderedSeats = seats.sort((a, b) => (a.seatId < b.seatId ? -1 : 0));
  const orderedSeatIds = seats
    .map(({ seatId }) => seatId)
    .sort((a, b) => (a < b ? -1 : 1));

  let i;

  for (i = 0; i < orderedSeatIds.length - 1; i += 1) {
    if (orderedSeatIds[i + 1] !== orderedSeatIds[i] + 1) {
      break;
    }
  }

  return orderedSeatIds[i] + 1;
};

// Debugging
// console.log(findMissingSeatId(require('./data')));

module.exports = findMissingSeatId;

const { parseData } = require('./helpers');

const findAccumulatorBeforeLoop = (dataOriginal) => {
  const data = parseData(dataOriginal);

  let accumulator = 0;
  let index = 0;
  let instruction = data[index];
  while (!instruction.executed) {
    instruction.executed = true;

    switch (instruction.cmd) {
      case 'acc':
        index += 1;
        accumulator += instruction.int;
        break;
      case 'jmp':
        index += instruction.int;
        break;
      case 'nop':
      default:
        index += 1;
        break;
    }

    instruction = data[index];
  }

  return accumulator;
};

// Debugging
// console.log(findAccumulatorBeforeLoop(require('./data')));

module.exports = findAccumulatorBeforeLoop;

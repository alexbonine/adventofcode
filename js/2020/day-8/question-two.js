const { parseData } = require('./helpers');

const bruteForce = (
  dataOriginal,
  startIndex = 0,
  startAccumulator = 0,
  fix = false
) => {
  const data = dataOriginal.map((item) => ({ ...item, executed: false }));
  let index = startIndex;
  let accumulator = startAccumulator;
  let instruction = data[index];
  let triedId;
  let nextStartIndex;
  let lastStartAccumulator;

  while (instruction && !instruction.executed) {
    instruction.executed = true;

    if (instruction.cmd === 'acc') {
      index += 1;
      accumulator += instruction.int;
    } else if (fix && instruction.cmd === 'jmp' && !triedId) {
      triedId = instruction.id;
      nextStartIndex = index + instruction.int;
      lastStartAccumulator = accumulator;
      index += 1;
    } else if (instruction.cmd === 'jmp') {
      index += instruction.int;
    } else if (fix && instruction.cmd === 'nop' && !triedId) {
      triedId = instruction.id;
      nextStartIndex = index + 1;
      lastStartAccumulator = accumulator;
      index += instruction.int;
    } else {
      index += 1;
    }

    instruction = data[index];
  }

  if (index === data.length) {
    return { triedId, found: true, accumulator };
  }

  return { triedId, nextStartIndex, lastStartAccumulator };
};

const findAccumulatorFixLoop = (dataOriginal, log = false) => {
  const data = parseData(dataOriginal);
  let response = {};

  while (!response.found) {
    response = bruteForce(
      data,
      response.nextStartIndex,
      response.lastStartAccumulator,
      true
    );

    if (!response.found && log) {
      console.log(
        `tried ${response.triedId} - ${data[response.triedId].cmd} ${
          data[response.triedId].int
        }`
      );
    }
  }

  if (log) {
    console.log(
      `found ${response.triedId} - ${data[response.triedId].cmd} ${
        data[response.triedId].int
      } - ${response.accumulator}`
    );
  }

  const { accumulator } = bruteForce([
    ...data.slice(0, response.triedId),
    {
      ...data[response.triedId],
      cmd: data[response.triedId].cmd === 'jmp' ? 'nop' : 'jmp',
    },
    ...data.slice(response.triedId + 1),
  ]);

  return accumulator;
};

// Debugging
// console.log(findAccumulatorFixLoop(require('./data'), true));

module.exports = findAccumulatorFixLoop;

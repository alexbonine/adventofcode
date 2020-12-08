const parseData = (data) =>
  data.split('\n').map((instruction, index) => {
    const [cmd, int] = instruction.split(' ');

    return { cmd, int: +int, id: index, executed: false };
  });

module.exports = { parseData };

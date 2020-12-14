const runRules = (dataOriginal, processor) => {
  let didChange = true;
  let data = dataOriginal.split('\n').reduce((accum, row) => {
    const tempRow = [];

    for (let i = 0; i < row.length; i++) {
      tempRow.push(row[i]);
    }

    accum.push(tempRow);

    return accum;
  }, []);

  while (didChange) {
    const processed = processor(data);
    didChange = processed.didChange;
    data = processed.data;
  }

  return data;
};

module.exports = { runRules };

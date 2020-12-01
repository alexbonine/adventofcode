const expenses = require('./data');

const expensesMap = expenses.reduce((accum, expense) => {
  accum[expense] = true;
  return accum;
}, {});

let first;
let second;

for (let i = 0; i < expenses.length; i += 1) {
  const diff = 2020 - expenses[i];
  if (expensesMap[diff]) {
    first = expenses[i];
    second = diff;
    break;
  }
}

console.log(first, second, first * second); // 1316 704 926464

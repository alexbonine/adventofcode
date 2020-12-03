const expenses = require('./data');

const expensesMap = expenses.reduce((accum, expense) => {
  accum[expense] = 2020 - expense;
  return accum;
}, {});

let first;
let second;
let third;

for (let i = 0; i < expenses.length; i += 1) {
  first = expenses[i];

  for (let j = i + 1; j < expenses.length - i; j += 1) {
    second = expenses[j];
    const diffLeft = expensesMap[first] - second;

    if (expensesMap[diffLeft]) {
      third = diffLeft;
      break;
    }
  }

  if (third) {
    break;
  }
}

console.log(first, second, third, first * second * third); // 968 69 983 65656536

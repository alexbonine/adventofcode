const { parseGroupsQuestionsMap } = require('./helpers');

const countQuestions = (data) =>
  parseGroupsQuestionsMap(data).reduce(
    (accum, questionsMap) => accum + Object.keys(questionsMap.questions).length,
    0
  );

// Debugging
// console.log(countQuestions(require('./data')));

module.exports = countQuestions;

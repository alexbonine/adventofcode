const { parseGroupsQuestionsMap } = require('./helpers');

const countAllQuestions = (data) =>
  parseGroupsQuestionsMap(data).reduce(
    (accum, questionsMap) =>
      accum +
      Object.keys(questionsMap.questions).reduce((accum2, questionsKey) => {
        if (questionsMap.questions[questionsKey] === questionsMap.personCount) {
          accum2.push(true);
        }

        return accum2;
      }, []).length,
    0
  );

// Debugging
// console.log(countAllQuestions(require('./data')));

module.exports = countAllQuestions;

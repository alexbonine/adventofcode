const parseGroupsQuestionsMap = (data) => {
  const groups = data.split('\n\n');

  return groups.reduce((accum, group) => {
    const persons = group.split('\n');

    const questionsMap = persons.reduce(
      (accum, person) => {
        [...person].forEach((question) => {
          accum.questions[question] = (accum.questions[question] || 0) + 1;
        });

        return accum;
      },
      { personCount: persons.length, questions: {} }
    );

    accum.push(questionsMap);

    return accum;
  }, []);
};

module.exports = { parseGroupsQuestionsMap };

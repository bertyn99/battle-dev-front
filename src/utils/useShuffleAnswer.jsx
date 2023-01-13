export const useShuffleAnswer = (question) => {
  const unshuffledAnswer = [
    question.correct_answer,
    ...question.incorrect_answers,
  ];

  return unshuffledAnswer
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};

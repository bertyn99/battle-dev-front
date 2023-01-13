import React from "react";
import clsx from "clsx";
function Response({ text, correctAnswer, currentAnswers, setCurrentAnswers }) {
  const isCorrectAnswer = currentAnswers && text === correctAnswer;
  const isWrongAnswer = currentAnswers && text !== correctAnswer;

  return (
    <div
      className={clsx(
        "rounded-xl bg-gray-900/40 hover:bg-indigo-500 p-2 text-center",
        isCorrectAnswer ? "bg-green-500" : "",
        isWrongAnswer ? "bg-red-500" : ""
      )}
      onClick={() => setCurrentAnswers(text)}
    >
      {text}
    </div>
  );
}

export default Response;

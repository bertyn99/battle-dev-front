import { useEffect } from "react";
import { useState } from "react";

export const useQuestions = (questions) => {
  // index of question
  const [index, setIndex] = useState(0);
  // current  question
  const [currentQuestion, setCurrentQuestion] = useState(questions[index]);

  const next = () => {
    if (index < questions.length) {
      setIndex((v) => v + 1);
      setCurrentQuestion(questions[index]);
    }
  };
  useEffect(() => {
    console.log("hook index", index);
    setCurrentQuestion(questions[index]);
  }, [index]);
  useEffect(() => {
    console.log("hook question", currentQuestion);
  }, [currentQuestion]);
  return { currentQuestion, setCurrentQuestion, index, next };
};

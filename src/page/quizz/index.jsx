import React, { useEffect } from "react";
import Steps from "../../components/quizz/steps";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useQuestions } from "../../utils/useQuestions";
import BaseButton from "../../components/common/BaseButton";
import { useShuffleAnswer } from "../../utils/useShuffleAnswer";
import Response from "../../components/quizz/response";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addScore } from "../../store/slice/quizzSlice";

function Quizz() {
  const data = useLoaderData();
  const navigate = useNavigate();
  /*   console.log(data); */
  const questionsManager = useQuestions(data);
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [answers, setAnswers] = useState([]);
  const dispatch = useDispatch();
  /*   console.log(questionsManager.currentQuestion);
  console.log(questionsManager.currentQuestion.correct_answer);
  console.log(questionsManager.index); */

  const goToNextQuestion = () => {
    questionsManager.next();
    setCurrentAnswers(null);
    if (currentAnswers == questionsManager.currentQuestion.correct_answer) {
      dispatch(addScore());
    }
  };

  const goToScore = () => {
    setCurrentAnswers(null);
    if (currentAnswers == questionsManager.currentQuestion.correct_answer) {
      dispatch(addScore());
    }
    navigate("/quizz/result");
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);
  useEffect(() => {
    if (questionsManager.index < 10) {
      console.log("page index:", questionsManager.index);
      setAnswers([...useShuffleAnswer(questionsManager.currentQuestion)]);
    }
  }, [questionsManager.currentQuestion]);

  return (
    <div className=" max-w-2xl h-full mx-auto px-4 flex flex-col gap-12 ">
      <Steps nbStep={10} />

      <div>
        <img
          src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt=""
          className="rounded-xl h-1/3 max-h-60 w-full"
        />
        <h2 className="text-center font-medium text-xl my-4">
          {questionsManager.currentQuestion.question}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2 ">
        {answers.map((answer, i) => (
          <Response
            text={answer}
            currentAnswers={currentAnswers}
            correctAnswer={questionsManager.currentQuestion.correct_answer}
            setCurrentAnswers={setCurrentAnswers}
            key={i}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {questionsManager.index < 9 && (
          <>
            <BaseButton onClick={goToNextQuestion}>Next</BaseButton>
            <BaseButton
              onClick={() => questionsManager.next()}
              variant="secondary"
            >
              Skip
            </BaseButton>
          </>
        )}
        {questionsManager.index == 9 && (
          <BaseButton onClick={goToScore}>Finish</BaseButton>
        )}{" "}
      </div>
    </div>
  );
}

export default Quizz;

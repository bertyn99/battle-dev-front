import React from "react";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import useWindowSize from "react-use/lib/useWindowSize";
import { BsTrophyFill } from "react-icons/bs";
import BaseButton from "../../components/common/BaseButton";
import { useNavigate } from "react-router-dom";
function Result() {
  const { score, category, mode } = useSelector((state) => state.quizz);
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  return (
    <div className="max-w-xl h-full mx-auto px-4 flex flex-col items-center gap-12">
      <div className="relative">
        <Confetti width={width} height={height} />
      </div>
      <BsTrophyFill className="h-36 w-36 text-indigo-500" />
      <span className="text-bold text-xl">Mode: {mode}</span>
      <span className="text-bold text-xl">Category: {category}</span>
      <span className="text-bold text-xl">Score: {score}/10</span>
      <BaseButton onClick={() => navigate("/home")}>Go to Home</BaseButton>
    </div>
  );
}

export default Result;

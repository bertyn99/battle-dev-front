import React, { useState } from "react";
import BaseButton from "../components/common/BaseButton";
import Selector from "../components/common/Selector";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuizz } from "../store/slice/quizzSlice";
function Home() {
  const category = useLoaderData();
  const navigate = useNavigate();
  const [selectedCat, setCategory] = useState(null);
  const [mode, setMode] = useState("");
  const dispatch = useDispatch();
  const isActive = (text) => mode == text;

  const play = () => {
    dispatch(setQuizz({ mode, category: selectedCat }));
    navigate("/quizz");
  };
  return (
    <div className=" max-w-2xl mx-auto px-4 flex flex-col gap-6 ">
      <div>
        <img src="world_map.png" className="h-18 w-18 mx-auto" alt="" />
        <h2 className="font-bold text-3xl text-center mb-5">BattleQuizz</h2>
      </div>

      <div>
        <h2 className="font-semibold text-xl text-center ">
          Select a Category
        </h2>

        <Selector
          list={category}
          selected={selectedCat}
          setSelected={setCategory}
        />
      </div>
      <div className="my-4">
        <h2 className="font-semibold text-xl text-center mb-2">
          Select a mode
        </h2>
        <div className="flex gap-2">
          <BaseButton
            variant={isActive("Solo") ? "secondary-active" : "secondary"}
            onClick={() => setMode("Solo")}
          >
            Solo
          </BaseButton>
          <BaseButton
            variant={isActive("Multi") ? "secondary-active" : "secondary"}
            onClick={() => setMode("Multi")}
          >
            Multi
          </BaseButton>
        </div>
      </div>

      <BaseButton disabled={selectedCat == null || mode == ""} onClick={play}>
        Start a new Battle
      </BaseButton>
    </div>
  );
}

export default Home;

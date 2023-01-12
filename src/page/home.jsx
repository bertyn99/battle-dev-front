import React from "react";
import BaseButton from "../components/common/BaseButton";
import Selector from "../components/common/Selector";
import { useLoaderData } from "react-router-dom";
function Home() {
  const category = useLoaderData();

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

        <Selector list={category} />
      </div>
      <div className="my-4">
        <h2 className="font-semibold text-xl text-center mb-2">
          Select a mode
        </h2>
        <div className="flex gap-2">
          <BaseButton variant="secondary">Solo</BaseButton>
          <BaseButton variant="secondary">Multi</BaseButton>
        </div>
      </div>

      <BaseButton>Start a new Battle</BaseButton>
    </div>
  );
}

export default Home;

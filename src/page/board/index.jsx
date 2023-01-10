import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
function Board() {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-center items-center">
        <BsTrophyFill className="h-36 w-36 text-indigo-500" />
        <h2>Ranking Board</h2>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Board;

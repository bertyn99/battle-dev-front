import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { Outlet ,Link} from "react-router-dom";
import BaseButton from "../../components/common/BaseButton";
function Board() {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-center items-center">
        <BsTrophyFill className="h-36 w-36 text-indigo-500" />
        <h2>Ranking Board</h2>
      </div>

      <div className="mt-5">
        <nav className="flex justify-center gap-2">
        
          <Link to="/board/">
            <BaseButton variant="secondary">Top Ranking</BaseButton>
          </Link>
          <Link to="me">
            <BaseButton variant="secondary">My position</BaseButton>
          </Link>
          
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default Board;

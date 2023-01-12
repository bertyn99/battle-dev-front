import React from "react";
import List from "../components/common/List";
import { useLoaderData } from "react-router-dom";
import { clsx } from "clsx";
import Avatar from "../components/user/Avatar";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/slice/authSlice";
function History() {
  const history = useLoaderData();
  const user = useSelector(selectCurrentUser);
  const isWon = (winnerId) => {
    console.log(user._id);
    console.log(winnerId);
    return user._id == winnerId;
  };
  const Battle = ({ data }) => (
    <div
      className={clsx(
        " w-full  bg-gray-900/50 inline-flex items-center justify-around  py-1 px-6 rounded-xl"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <Avatar size={"xs"} />
          <span className=" text-sm font-medium">
            {data.idOpponents[0].username}
          </span>
        </div>
        <span>VS</span>
        <div className="flex flex-col items-center">
          <Avatar size={"xs"} />
          <span className=" text-sm font-medium">
            {data.idOpponents[1].username}
          </span>
        </div>
      </div>
      <div>
        <span>{isWon(data.winner._id) ? "Win" : "Loose"}</span>
      </div>
    </div>
  );
  return (
    <div>
      <h2 className="text-center text-xl font-semibold">History</h2>
      <div className="max-w-2xl mx-auto">
        <List
          type="column"
          list={history}
          gap={1}
          renderItem={(data) => <Battle data={data} />}
        ></List>
      </div>
    </div>
  );
}

export default History;

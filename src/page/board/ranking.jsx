import React from "react";
import List from "../../components/common/List";
import { useLoaderData } from "react-router-dom";
import Avatar from "../../components/user/Avatar";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
function Ranking({ type }) {
  const { total, leaderboard } = useLoaderData();
  const user = useSelector((state) => state.auth.user);
  const isUser = (name) => name === (user?.username ?? false);

  const Player = ({ data }) => (
    <div
      className={clsx(
        "h-10 w-full  bg-gray-900/50 inline-flex items-center justify-around  py-1 px-6 rounded-xl",
        isUser(data.username) && "border border-white"
      )}
    >
      <Avatar size={"xs"} />
      <span className="font-medium">{data.username}</span>

      <span>{data.quizzPoints}</span>
    </div>
  );

  return (
    <div className="container mx-auto">
      <List
        type="column"
        list={leaderboard}
        gap={1}
        renderItem={(data) => <Player data={data} />}
      ></List>
    </div>
  );
}

export default Ranking;

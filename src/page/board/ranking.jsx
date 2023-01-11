import React from "react";
import List from "../../components/common/List";
import { useLoaderData } from "react-router-dom";
import Avatar from "../../components/user/Avatar";
function Ranking({ type }) {
  const {total,leaderboard} = useLoaderData();

  const Player=({data})=>(
    <div className="h-10 w-full  bg-gray-900/50 inline-flex items-center justify-around  py-2 px-6">
      <Avatar size={'xs'}/>
     <span className="font-medium">{data.username}</span>

     <span>{data.quizzPoints}</span>
    </div>
  )
  return (
    <div>
      {type}
     <List type="column" list={leaderboard} gap={2} renderItem={(data)=><Player data={data}/>}></List>
    </div>
  );
}

export default Ranking;

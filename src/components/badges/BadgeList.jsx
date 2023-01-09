import React from "react";
import List from "../common/List";
import Badge from "./Badge";
import { SlBadge } from "react-icons/sl";
const list = ["a", "b", "c", "c", "d", "d", "e", "s", "s"];
function BadgeList({ badges }) {
  return (
    <div className="mt-3 ">
      <h2 className="text-center font-medium mb-6">Badges</h2>
      {badges?.length > 0 ? (
        <List list={badges} renderItem={(data) => <Badge data={data} />}></List>
      ) : (
        <p className="h-36 w-full  bg-gray-900/50 inline-flex justify-center items-center gap-2 p-2 font-medium text-lg">
          <SlBadge className="h-6 w-6" /> No Badges Earned
        </p>
      )}
    </div>
  );
}

export default BadgeList;

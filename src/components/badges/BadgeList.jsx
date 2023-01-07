import React from "react";
import List from "../common/List";
import Badge from "./Badge";
const list = ["a", "b", "c", "c", "d", "d", "e", "s", "s"];
function BadgeList() {
  return (
    <div className="mt-2 ">
      <h2 className="text-center font-medium mb-6">Badges</h2>
      <List list={list} renderItem={(data) => <Badge data={data} />}></List>
    </div>
  );
}

export default BadgeList;

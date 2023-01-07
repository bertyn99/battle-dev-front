import React from "react";
import { Children } from "react";

function List({ list, renderItem }) {
  return (
    <ul className="w-full flex flex-col gap-3  h-[50vh] overflow-y-scroll snap-y py-4">
      {list.map((item, i) => (
        <li className="md:scroll-my-5 snap-start" key={i}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default List;

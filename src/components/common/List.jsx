import { clsx } from "clsx";
import React from "react";
import { Children } from "react";

function List({ list, renderItem, type = "column", gap = "3" }) {
  const isColumn = () => {
    switch (type) {
      case "column":
        return "flex-col";
        break;
      case "row":
        return "";
        break;

      default:
        return "";
        break;
    }
  };
  return (
    <ul
      className={clsx(
        "w-full flex  h-[48vh] overflow-y-scroll md:overflow-y-auto snap-y py-4",
        isColumn(),
        `gap-${gap}`
      )}
    >
      {list.map((item, i) => (
        <li className="md:scroll-my-5 snap-start" key={i}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default List;

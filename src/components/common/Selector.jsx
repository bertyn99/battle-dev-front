import clsx from "clsx";
import React, { useState } from "react";

function Selector({ list = [] }) {
  const [selected, setSelected] = useState("");
  return (
    <div className="w-full text-white font-medium  my-4">
      <select
        name="category"
        id=""
        value={selected}
        className={clsx(
          "block w-full cursor-default rounded-md border border-transparent bg-gray-100/5",
          " capitalize py-2 pl-3 pr-10 text-left shadow-sm",
          "focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        )}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option
          value=""
          disable
          hidden
          selected
          className=" hover:bg-red-500 py-4 pl-8 pr-4 text-black capitalize"
        >
          Select Food, Cinema...
        </option>
        {list.map((v) => (
          <option
            value={v.id}
            className=" hover:bg-red-500 py-4 pl-8 pr-4 text-black capitalize"
          >
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;

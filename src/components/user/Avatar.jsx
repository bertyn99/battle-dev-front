import React from "react";
import { GiAbstract107 } from "react-icons/gi";
function Avatar() {
  return (
    <div className="inline-flex justify-center items-center h-28 w-28 md:h-36 md:w-36 rounded-full bg-black/50">
      <GiAbstract107 className="text-indigo-500 h-full w-full" />
    </div>

    /*     <img
      className="inline-block h-28 w-28 md:h-36 md:w-36 rounded-full"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    /> */
  );
}

export default Avatar;

import {clsx} from "clsx";
import React from "react";
import { GiAbstract107 } from "react-icons/gi";
function Avatar({size='xl'}) {
  const getSize=()=>{
    switch (size) {
      case 'xs':
        return 'h-6 w-6 md:h-10 md:w-10'
        break;
      case 'sm':
        return 'h-14 w-14 md:h-24 md:w-24'
        break;
      case 'md':
        return 'h-20 w-20 md:h-28 md:w-28'
        break; 
      case 'xl':
        return 'h-28 w-28 md:h-36 md:w-36'
        break;
      default:
        break;
    }
  }
  return (
    <div className={clsx("inline-flex justify-center items-center  rounded-full bg-black/50",getSize())}>
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

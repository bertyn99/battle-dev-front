import {clsx} from 'clsx';
import React from 'react'

function BaseButton({children, type="", variant="primary"}) {
  const btnStyle = ()=>{
      switch (variant) {
        case "primary":
          return 'bg-gradient-to-r from-indigo-600 to-pink-600'
          break;
        case "secondary":
          return 'bg-gray-900/50'
          break;
        default:
          return 'bg-gradient-to-r from-indigo-600 to-pink-600'
          break;
      }
  }
  console.log(btnStyle())
  return (
    <button type={type} className={clsx("flex w-full justify-center rounded-md   py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",[btnStyle()])}
    >
        {children}
    </button>
  )
}

export default BaseButton
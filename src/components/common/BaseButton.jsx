import React from 'react'

function BaseButton({children, type=""}) {

  return (
    <button type={type} className="flex w-full justify-center rounded-md  bg-gradient-to-r from-indigo-600 to-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        {children}
    </button>
  )
}

export default BaseButton
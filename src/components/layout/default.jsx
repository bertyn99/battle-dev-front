import React from 'react'
import NavBarMenu from '../common/NavBarMenu'

function DefaultLayout({children}) {
  return (
    <><main className=''>{children}</main><header className='fixed w-full bottom-0'><NavBarMenu></NavBarMenu></header></>
  )
}

export default DefaultLayout
import React from "react";
import NavBarMenu from "../common/NavBarMenu";
import NavigationTop from "../common/NavigationTop";

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col-reverse h-screen sm:flex-row ">
      <aside className="">
        <NavBarMenu></NavBarMenu>
      </aside>
      <main className="w-full h-full ml-auto overflow-hidden ">
        <NavigationTop></NavigationTop>
        <div className="p-4 md:p-6">{children}</div>{" "}
      </main>
    </div>
  );
}

export default DefaultLayout;

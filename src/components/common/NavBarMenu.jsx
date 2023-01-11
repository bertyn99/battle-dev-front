import React from "react";
import { Link } from "react-router-dom";
import { MdLeaderboard } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";
import { HiHome, HiUser } from "react-icons/hi";
import { clsx } from "clsx";
import { matchRoutes, useLocation } from "react-router-dom";
import useGetCurrentPath from "../../utils/useGetCurrentPath";

const links = [
  {
    path: "/home",
    icon: (v) => <HiHome className={`h-${v} w-${v}`} />,
    text: "Home",
  },
  {
    path: "/history",
    icon: (v) => <GiBlackBook className={`h-${v} w-${v}`} />,
    text: "Historic",
  },
  {
    path: "/board",
    icon: (v) => <MdLeaderboard className={`h-${v} w-${v}`} />,
    text: "Board",
  },
  {
    path: "/profile",
    icon: (v) => <HiUser className={`h-${v} w-${v}`} />,
    text: "User",
  },
];

function NavBar() {
  const path = useGetCurrentPath();
  const isActive = (linkPath) => {
    return linkPath === path;
  };
  return (
    <nav className=" sm:h-full  bg-gray-100/10  text-gray-300">
      <ul className="sm:hidden w-full  flex items-center justify-between md:flex-col py-4 sm:py-1.5 px-2 gap-1">
        {links.map((link) => (
          <li
            className={clsx(
              "w-1/4 h-full inline-flex items-center justify-center  rounded-md ",
              " hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600",
              isActive(link.path) &&
                "w-1/3 text-gray-200 font-medium bg-gradient-to-r from-indigo-600 to-pink-600"
            )}
            key={link.text}
          >
            <Link
              to={link.path}
              className={clsx(
                "inline-flex items-center justify-center text-sm px-2 py-1"
              )}
            >
              {link.icon(6)}{" "}
              {isActive(link.path) && (
                <span className="transition-all delay-250">{link.text} </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/*  desktop menu */}
      <ul className="hidden sm:block w-20 h-full hover:w-40 pt-6 px-2 transition-all delay-150 group">
        {links.map((link) => (
          <Link to={link.path}>
            <li
              className={clsx(
                "w-full  inline-flex items-center justify-center group-hover:gap-x-4  rounded-md mt-7  py-2 transition-all delay-350  text-gray-200 font-medium",
                " hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600",
                isActive(link.path) &&
                  " bg-gradient-to-r from-indigo-600 to-pink-600"
              )}
              key={link.text}
            >
              {link.icon(8)}
              <span className="hidden group-hover:block transition-all delay-250">
                {link.text}{" "}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

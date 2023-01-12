import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronCompactLeft, BsThreeDotsVertical } from "react-icons/bs";
import { useLocation } from "react-router-dom";
const titleMap = [
  { path: "/home", title: "Home" },
  { path: "/quizz", title: "Quizz" },
  { path: "/board", title: "LeaderBoard" },
  { path: "/board/me", title: "LeaderBoard" },
  { path: "/profile", title: "Profile" },
];
function NavigationTop() {
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState("Home");
  let curLoc = useLocation();

  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <nav className="h-9 bg-white/0 flex justify-between items-center px-4 mt-1">
      <BsChevronCompactLeft onClick={goBack} />
      <span>{pageTitle}</span>
      <BsThreeDotsVertical />
    </nav>
  );
}

export default NavigationTop;

import React from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronCompactLeft, BsThreeDotsVertical } from "react-icons/bs";
function NavigationTop() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <nav className="h-9 bg-white/0 flex justify-between items-center px-4 mt-1">
      <BsChevronCompactLeft onClick={goBack} />
      <BsThreeDotsVertical />
    </nav>
  );
}

export default NavigationTop;

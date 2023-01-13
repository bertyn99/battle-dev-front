import { clsx } from "clsx";
import React from "react";

function BaseButton({
  children,
  type = "",
  variant = "primary",
  onClick,
  disabled = false,
}) {
  const btnStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-indigo-600 to-pink-600";
        break;
      case "secondary":
        return "bg-gray-900/50";
        break;
      case "secondary-active":
        return "bg-indigo-700";
        break;
      default:
        return "bg-gradient-to-r from-indigo-600 to-pink-600";
        break;
    }
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clsx(
        "flex w-full justify-center rounded-md   py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all ",
        [btnStyle()]
      )}
    >
      {children}
    </button>
  );
}

export default BaseButton;

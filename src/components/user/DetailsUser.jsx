import React from "react";
import Avatar from "./Avatar";

function DetailsUser() {
  const stat = [
    { value: 11, type: "rank" },
    { value: 29, type: "badges" },
    { value: 0, type: "followers" },
  ];
  return (
    <div className="h-1/3 flex flex-col items-center gap-4 container mx-auto">
      <Avatar />
      <span className="font-medium">User name</span>

      <div className="w-full flex gap-2">
        {stat.map((v) => (
          <div
            className="flex flex-col items-center w-1/3 bg-gray-900/50 rounded-md px-2 py-2 md:py-3"
            key={v.type}
          >
            {v.value}
            <span className="font-medium capitalize">{v.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsUser;

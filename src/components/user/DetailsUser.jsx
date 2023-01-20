import React from "react";
import Avatar from "./Avatar";

function DetailsUser({ user }) {
  const stat = [
    { value: user?.rank || 0, type: "rank" },
    { value: user?.badges?.length, type: "badges" },
    { value: user?.quizzPoints || 0, type: "quizzPoints" },
  ];

  const {} = user;
  return (
    <div className="h-1/3 flex flex-col items-center gap-4 container mx-auto">
      <Avatar url={user.avatar} />
      <span className="font-medium">{user?.username || "User Name"}</span>

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

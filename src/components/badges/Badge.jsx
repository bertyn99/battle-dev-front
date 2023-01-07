import React from "react";

function Badge({ data = 0 }) {
  return (
    <div className="h-20 w-full  bg-gray-900/50 inline-flex items-center p-2">
      Badge {data}
    </div>
  );
}

export default Badge;

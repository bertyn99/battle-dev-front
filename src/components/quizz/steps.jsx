import React from "react";

function Step({ number, hidden }) {
  return (
    <div hidden={hidden} className="rounded-full bg-indigo-400 p-1">
      {number.toString()}
    </div>
  );
}
function Steps({ nbStep, actualStep }) {
  const a = [...Array(nbStep).keys()];
  const visibleSteps = actualStep;
  return (
    <div className="flex justify-around w-full">
      {a.map((i) => (
        <Step number={i + 1} key={i} />
      ))}
    </div>
  );
}

export default Steps;

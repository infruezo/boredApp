import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-lg font-bold"> Accessibility: </span>
      <div className="w-1/2 h-3 overflow-hidden bg-gray-300 rounded-md shadow-md">
        <div
          style={{ width: `${progress * 100}%` }}
          className="h-full bg-gradient-to-r to-indigo-500 from-indigo-600"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;

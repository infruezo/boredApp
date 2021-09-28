import React from "react";

function Price({ price }) {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-lg font-bold">Price:</p>
      <span
        className={`${price}` * 100 === 0 ? "text-green-500" : "text-gray-900"}
      >
        {price === 0 ? `Free` : `${price * 100}$`}
      </span>
    </div>
  );
}

export default Price;

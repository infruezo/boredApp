import React from "react";

function Link({ link }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-lg font-bold">Link:</span>
      <div className="flex items-center space-x-1 text-blue-500 underline hover:text-gray-900">
        <a target="_blank" href={link}>
          check this page
        </a>
        <img src="../images/link.png" alt="" />
      </div>
    </div>
  );
}

export default Link;

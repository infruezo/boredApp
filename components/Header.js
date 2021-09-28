import React from "react";
import { useState, useEffect } from "react";
import Activity from "./Activity";

function Header({ activity }) {
  const [updateActivity, setUpdateActivity] = useState(activity);

  const update = async ({ activity }) => {
    const res = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await res.json();
    setUpdateActivity(data);
  };

  return (
    <div className="container flex flex-col items-center justify-between my-12 space-y-3 lg:flex-row-reverse lg:space-y-0">
      <button
        className="px-16 py-4 mt-4 mb-6 text-lg bg-indigo-500 rounded-lg shadow-xl outline-none text-gray-50 hover:bg-indigo-600 ring ring-indigo-600 hover:ring-indigo-700 focus:outline-none lg:my-0"
        onClick={update}
      >
        Suggest me something else !
      </button>
      <Activity activity={updateActivity} />
    </div>
  );
}

export default Header;

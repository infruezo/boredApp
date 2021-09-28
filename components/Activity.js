import React from "react";
import Link from "./Link";
import Price from "./Price";
import ProgressBar from "./ProgressBar";

function Activity({ activity }) {
  return (
    <div className="flex flex-col w-11/12 h-auto px-8 py-6 mx-auto mb-12 space-y-2 text-gray-900 border-2 border-indigo-800 rounded-lg shadow-lg bg-gradient-to-tl from-indigo-50 to-indigo-200 sm:w-4/5 md:w-3/5 lg:w-1/2 lg:mx-0">
      <p>
        <span className="text-lg font-bold">Activity</span> :{" "}
        {" " + activity.activity}
      </p>
      <div className="flex items-center space-x-2">
        <p className="text-lg font-bold">Type: </p>
        <span className="w-24 text-center text-white bg-indigo-700 rounded-full shadow-md cursor-pointer hover:bg-indigo-600">
          {activity.type}
        </span>
      </div>
      <div className="flex space-x-2">
        <span className="text-lg font-bold">Participants:</span>
        <div className="flex items-center space-x-1">
          <span>{activity.participants}</span>
          <img src="../images/user.png" alt="" className="object-contain" />
        </div>
      </div>
      <Price price={activity.price} />
      {activity.link === "" ? "" : <Link link={activity.link} />}

      {activity.accessibility === 0 ? (
        ""
      ) : (
        <ProgressBar progress={activity.accessibility} />
      )}
    </div>
  );
}

Activity.defaultProps = {
  activity: "Activity name here",
  type: "activity_type",
  participants: 12,
  price: 3,
  link: "link to do that activity",
  accessibility: 0.5,
};

export default Activity;

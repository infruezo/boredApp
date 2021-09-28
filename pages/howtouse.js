import React from "react";
import Nav from "../components/Nav";

function howtouse() {
  return (
    <div className="flex items-center justify-center w-screen mt-16">
      <div className="flex flex-col w-11/12 h-auto px-8 py-6 mx-auto mb-12 space-y-2 text-gray-900 border-2 border-indigo-800 rounded-lg shadow-lg bg-gradient-to-tl from-indigo-50 to-indigo-200 sm:w-4/5 md:w-3/5 lg:w-1/3 lg:mx-0">
        <div class="flex items-center space-x-4">
          <h1 className="text-3xl">Are you bored </h1>
          <img src="./images/emoji.png" className="object-cover h-10" alt="" />
        </div>
        <p className="text-lg">
          Go to our main{" "}
          <a href="/" className="text-blue-500 underline">
            Page
          </a>{" "}
          and click on the button to get suggested one of{" "}
          <span className="text-blue-500">1000</span> random activities. Who
          knows you might just find something really fun to do thanks to this
          simple App!
        </p>
      </div>
    </div>
  );
}

export default howtouse;

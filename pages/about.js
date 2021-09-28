import React from "react";
import Nav from "../components/Nav";

function about() {
  return (
    <div className="flex items-center justify-center w-screen mt-16">
      <div className="flex flex-col w-11/12 h-auto px-8 py-6 mx-auto mb-12 space-y-2 text-gray-900 border-2 border-indigo-800 rounded-lg shadow-lg bg-gradient-to-tl from-indigo-50 to-indigo-200 sm:w-5/6 md:w-4/6 lg:w-1/2 xl:w-1/3 lg:mx-0">
        <div class="flex items-center space-x-4">
          <h1 className="text-3xl">About this app</h1>
          <img
            src="./images/dab.png"
            className="object-cover h-12 rotate-6"
            alt=""
          />
        </div>
        <p>
          This app was created by <span className="text-blue-500">Mounder</span>{" "}
          using the free <span className="text-blue-500">Bored API.</span> You
          can check them{" "}
          <a
            href="http://www.boredapi.com/"
            target="_blank"
            className="text-blue-500 underline duration-300 transform hover:text-gray-900 hover:no-underline"
          >
            here
          </a>{" "}
          to get started.
        </p>
        <div className="flex flex-wrap items-center space-x-2">
          <p>Technologies used to build it are listed down here</p>
          <img src="./images/emoji_2.png" className="h-6" alt="" />
        </div>
        <div className="grid items-center grid-cols-4 gap-4 mt-2 md:gap-6 lg:gap-8">
          <div className="col-span-1">
            <img src="./images/react.png" alt="react" className="h-12" />
          </div>
          <div className="col-span-1">
            <img src="./images/nextjs.png" alt="nextjs" className="h-12" />
          </div>
          <div className="col-span-1">
            <img src="./images/tailwind.png" alt="tailwind" className="h-9" />
          </div>
          <div className="col-span-1">
            <img src="./images/html.png" alt="html" className="h-12" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default about;

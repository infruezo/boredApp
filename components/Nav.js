import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="border-b-2 border-indigo-800 bg-gradient-to-r to-indigo-400 from-indigo-600 ">
        <div className="container flex flex-wrap items-center p-3">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 space-x-2">
              <img
                src="../images/logo.png"
                className="lg:w-8 lg:h-8 w-7 h-7"
                alt=""
              />
              <div className="text-lg font-bold tracking-wide text-white md:text-xl">
                I_Am_Bored.app
              </div>
            </a>
          </Link>
          <button
            className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-indigo-700 lg:hidden hover:text-white"
            onClick={handleClick}
          >
            <img src="../images/menu.png" className="w-7 h-7" alt="" />
          </button>

          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="flex flex-col items-start w-full lg:space-x-12 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
              <Link href="/">
                <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-indigo-700 hover:text-white ">
                  Home
                </a>
              </Link>
              <Link href="/howtouse">
                <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-indigo-700 hover:text-white">
                  How to Use
                </a>
              </Link>
              <Link href="/about">
                <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-indigo-700 hover:text-white">
                  About us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

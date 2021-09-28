import React from "react";
import Meta from "./Meta";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main className="">{children}</main>
      </div>
    </>
  );
}

export default Layout;

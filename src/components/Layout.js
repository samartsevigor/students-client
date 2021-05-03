import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-6">{children}</div>
    </>
  );
};

export default Layout;

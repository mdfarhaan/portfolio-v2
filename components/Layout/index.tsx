import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 xl:ml-52 lg:ml-32 sm:ml-36 ml-10">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Layout;

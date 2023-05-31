import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 sm:ml-20 ml-0">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Layout;

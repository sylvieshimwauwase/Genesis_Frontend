import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };
  return (
    <>
      <div className="flex">
        <SideBar isSidebarVisible={isSidebarVisible} />
        <div className="flex flex-col">
          <Header toggleSidebar={toggleSidebar} />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;

import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthHeader from "../components/AuthHeader";
import { useState } from "react";

const HomeLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth >= 768
  );

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };
  

  return (
    <>
      <div className="flex">
        <SideBar
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={`flex flex-col w-full min-h-screen ${
            isSidebarVisible ? "md:ml-72" : "md:ml-0"
          }`}
        >
          <AuthHeader toggleSidebar={toggleSidebar} />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
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
        <div className="flex flex-col w-full min-h-screen">
          <Header toggleSidebar={toggleSidebar} />
          <Outlet />
          <div className="h-full"></div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;

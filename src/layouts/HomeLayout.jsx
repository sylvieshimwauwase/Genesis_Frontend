import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

const HomeLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };
  return (
    <div>
    <Header toggleSidebar={toggleSidebar}/>
    <div className='flex'>
    <SideBar isSidebarVisible={isSidebarVisible}/>
    <Outlet />
    </div>
    
    <Footer />
    </div>
  )
}

export default HomeLayout
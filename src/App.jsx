import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <h1>Genesis Elearning</h1>
      <Header /> {/* This is where the Hello component will appear */}
      <SideBar />
      <Footer />
      
    </div>
  );
}

export default App;

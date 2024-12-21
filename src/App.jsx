import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import HomeLayout from './layouts/HomeLayout';
import SchemeofWork from './pages/SchemeofWork';
import Login from './pages/Login';
import Register from './pages/Registration';
import Books from './pages/Books';
import Notes from './pages/Notes';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<HomeLayout />} >
      <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/scheme-of-work" element={<SchemeofWork />} />
          <Route path="/lesson-plan" element={<AboutUs />} />
          <Route path="/books" element={<Books />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/exams" element={<AboutUs />} />
          <Route path="/works" element={<AboutUs />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

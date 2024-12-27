import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import HomeLayout from './layouts/HomeLayout';
import SchemeofWork from './pages/schemeofWork/P6SchemeofWork';
import Login from './pages/Login';
import Register from './pages/Registration';
import Books from './pages/books/P6Books';
import Notes from './pages/notes/P6Notes';
import P6Exams from './pages/exams/P6Exams';
import OrdinaryExams from './pages/exams/OrdinaryExams';
import AdvancedExams from './pages/exams/AdvancedExams';
import AdvancedSchemeofWork from './pages/schemeofWork/AdvancedSchemeofWork';
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
          <Route path="/exams/p6" element={<P6Exams />} />
          <Route path="/exams/ordinary-level" element={<OrdinaryExams />} />
          <Route path="/exams/advanced-level" element={<AdvancedExams />} />
          <Route path="/scheme-of-work/advanced-level" element={<AdvancedSchemeofWork />}  />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

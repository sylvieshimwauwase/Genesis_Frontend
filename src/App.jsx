
import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import HomeLayout from './layouts/HomeLayout';
import Login from './pages/Login';
import Register from './pages/Registration';
import Books from './pages/books/P6Books';
import Notes from './pages/notes/P6Notes';
import P6Exams from './pages/exams/P6Exams';
import OrdinaryExams from './pages/exams/OrdinaryExams';
import AdvancedExams from './pages/exams/AdvancedExams';
import AdvancedExamContent from './pages/exams/AdvancedExamContent';

import P6Books from './pages/books/P6Books';
import OrdinaryBooks from './pages/books/OrdinaryBooks';

import SchemeOfWork from './pages/schemeofWork/SchemeOfWork.jsx';
import AdvancedNotes from './pages/notes/AdvancedNotes';
import OrdinaryNotes from './pages/notes/OrdinaryNotes';
import P6Notes from './pages/notes/P6Notes';
import SchemePage from "./pages/schemeofWork/SchemePage.jsx";
import ChooseLessonPlan from "./pages/LessonPlan/ChooseLessonPlan.jsx";
import LessonPlanPage from "./pages/LessonPlan/LessonPlanPage.jsx";


import AdvancedSchemeofWork from "./pages/schemeofWork/AdvancedSchemeofWork";
import AdvancedNotes from "./pages/notes/AdvancedNotes";
import OrdinaryNotes from "./pages/notes/OrdinaryNotes";
import P6Notes from "./pages/notes/P6Notes";
import SubjectContent from "./components/subjectContent";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/books" element={<Books />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/exams" element={<AboutUs />} />
          <Route path="/works" element={<AboutUs />} />
          <Route path="/exams/p6" element={<P6Exams />} />
          <Route path="/exams/ordinary-level" element={<OrdinaryExams />} />
          <Route path="/exams/advanced-level" element={<AdvancedExams />} />


          <Route path="/subject-content" element={<SubjectContent />} />

          <Route path='/books/p6' element={<P6Books />} />
          <Route path='/books/ordinary-level' element={<OrdinaryBooks/>} />
          <Route path="/scheme-of-work" element={<SchemeOfWork />}  />
          <Route path="/scheme-of-work/:class/:subject" element={<SchemePage />} />
          <Route path="/lesson-plan" element={<ChooseLessonPlan />}  />
          <Route path="/lesson-plan/:class/:subject" element={<LessonPlanPage />} />

          <Route
            path="/exams/advanced/:year"
            element={<AdvancedExamContent />}
          />

          <Route path="/books/p6" element={<P6Books />} />
          <Route path="/books/ordinary-level" element={<OrdinaryBooks />} />
          <Route
            path="/scheme-of-work/advanced-level"
            element={<AdvancedSchemeofWork />}
          />

          <Route path="/Notes/p6" element={<P6Notes />} />
          <Route path="/Notes/ordinary-level" element={<OrdinaryNotes />} />
          <Route path="/notes/advanced-level" element={<AdvancedNotes />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

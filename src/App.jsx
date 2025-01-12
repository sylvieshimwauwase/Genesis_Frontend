import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Books from "./pages/books/Books";

import HomeLayout from "./layouts/HomeLayout";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import SchemeOfWork from "./pages/schemeofWork/SchemeOfWork.jsx";
import SchemePage from "./pages/schemeofWork/SchemePage.jsx";

import ChooseLessonPlan from "./pages/LessonPlan/ChooseLessonPlan.jsx";
import LessonPlanPage from "./pages/LessonPlan/LessonPlanPage.jsx";
import Contact from "./pages/Contact";
import ExamPage from "./pages/exams/ExamPage.jsx";
import Exams from "./pages/exams/Exams";

import Notes from "./pages/notes/Notes";
import NotesPage from "./pages/notes/NotesPage.jsx";
import BooksPage from "./pages/books/BooksPage.jsx";
import ForgotPassword from "./pages/ForgotPassword";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books-content" element={<BooksPage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes-content" element={<NotesPage />} />
          {/* <Route path="/works" element={<AboutUs />} /> */}
          <Route path="/exams" element={<Exams />} />
          <Route path="/exam-content" element={<ExamPage />} />
          <Route path="/scheme-of-work" element={<SchemeOfWork />} />
          <Route
            path="/scheme-of-work/:class/:subject"
            element={<SchemePage />}
          />
          <Route path="/lesson-plan" element={<ChooseLessonPlan />} />
          <Route
            path="/lesson-plan/:class/:subject"
            element={<LessonPlanPage />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;

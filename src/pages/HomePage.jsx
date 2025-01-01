import React from "react";
import { useNavigate } from "react-router-dom";
import tutor from "../assets/images/expert-tutors.png";
import courses from "../assets/images/interactive-courses.png";
import learning from "../assets/images/flexible-learning.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-[#4175B7] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Genesis E-Learning Platform
          </h1>
          <p className="text-lg mb-6">
            Empowering you with knowledge, interactive learning tools, and
            expert guidance.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about-us")}
              className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Genesis E-Learning?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-md text-center bg-gray-50">
              <img
                src={tutor}
                alt="Expert Tutors"
                className="w-60 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
              <p className="text-gray-600">
                Gain insights from professionals with extensive experience in
                their fields.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-md text-center bg-gray-50">
              <img
                src={courses}
                alt="Interactive Courses"
                className="w-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Interactive Courses
              </h3>
              <p className="text-gray-600">
                Enjoy hands-on learning with activities that challenge and
                engage you.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-md text-center bg-gray-50">
              <img
                src={learning}
                alt="Flexible Learning"
                className="w-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Access your learning material anytime, anywhere, on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-md">
              <p className="text-gray-600 mb-4">
                "Genesis has transformed the way I learn. The resources and
                courses are top-notch!"
              </p>
              <h4 className="font-semibold text-lg">- John Doe</h4>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md">
              <p className="text-gray-600 mb-4">
                "The flexibility of the platform makes it easy to balance work
                and study."
              </p>
              <h4 className="font-semibold text-lg">- Jane Smith</h4>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md">
              <p className="text-gray-600 mb-4">
                "The tutors are incredibly supportive and always provide
                valuable feedback."
              </p>
              <h4 className="font-semibold text-lg">- Emily Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Support Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Need Help or Have Feedback?
          </h2>
          <p className="text-lg mb-8">
            We're here to assist you. Reach out to us for support or to share
            your thoughts.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-400"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300"
            >
              Give Feedback
            </button>
          </div>
        </div>
      </section>
      
      <section className="bg-[#4175B7] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Join Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
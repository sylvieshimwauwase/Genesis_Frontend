import React from "react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-[#4175B7] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Genesis E-Learning Platform</h1>
          <p className="text-lg mb-6">
            Discover a world of knowledge, interactive courses, and personal growth.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Get Started
          </button>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-md text-center">
              <img
                src="/images/expert-tutors.png"
                alt="Expert Tutors"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
              <p className="text-gray-600">
                Learn from industry-leading professionals with real-world experience.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md text-center">
              <img
                src="/images/interactive-courses.png"
                alt="Interactive Courses"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
              <p className="text-gray-600">
                Engaging content and activities to keep you motivated and learning.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md text-center">
              <img
                src="/images/flexible-learning.png"
                alt="Flexible Learning"
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Study at your own pace anytime, anywhere, on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-md">
              <p className="text-gray-600 mb-4">
                "This platform has transformed my learning experience. The courses are
                well-structured and easy to follow."
              </p>
              <h4 className="font-semibold text-lg">- John Doe</h4>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md">
              <p className="text-gray-600 mb-4">
                "I love how flexible the schedule is. I can balance my work and studies
                effortlessly."
              </p>
              <h4 className="font-semibold text-lg">- Jane Smith</h4>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md">
              <p className="text-gray-600 mb-4">
                "The tutors are amazing! They are always available to help and
                provide valuable feedback."
              </p>
              <h4 className="font-semibold text-lg">- Emily Johnson</h4>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-[#4175B7] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Learning Journey?</h2>
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Join Us Today
          </button>
        </div>
      </section>
    </div>
  );
    
}

export default HomePage;
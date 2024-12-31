import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ExamTaskBar from "./ExamTaskBar";

const P6Exams = () => {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState(null);
  const [showYearSelector, setShowYearSelector] = useState(false);

  const examSections = [
    {
      title: "P6 Exams",
      exams: [
        "Mathematics",
        "Social Studies",
        "Science Elementary Technology",
        "English",
        "Kinyarwanda",
      ],
    },
  ];

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 2020; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  const handleExamClick = (examName) => {
    setSelectedExam(examName);
    setShowYearSelector(true);
  };

  const handleYearSelection = (year) => {
    setShowYearSelector(false);
    navigate(
      `/exams/p6/${selectedExam.toLowerCase().replace(" ", "-")}/${year}`
    );
  };

  return (
    <div className="flex-grow p-6">
      <ExamTaskBar defaultActiveTab="P6" />
      <h1 className="bg-[#4175B7] text-4xl font-bold text-white py-4 my-6 text-center">
        P6 Exams
      </h1>
      {examSections.map((section, index) => (
        <div key={index} className="mb-8 shadow-lg p-6 rounded bg-white">
          <h2 className="text-xl font-bold mt-4 mb-4 text-center">
            {section.title.toUpperCase()}
          </h2>
          <div className="flex flex-wrap gap-4">
            {section.exams.map((exam, idx) => (
              <div
                key={idx}
                onClick={() => handleExamClick(`${section.title} ${exam}`)}
                className="shadow-md hover:shadow-lg transition-shadow rounded"
              >
                <Button label={exam.toUpperCase()} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Year Selector Modal */}
      {showYearSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Select Year</h2>
            <div className="grid grid-cols-3 gap-4">
              {getYears().map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearSelection(year)}
                  className="bg-[#4175B7] text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  {year}
                </button>
              ))}
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowYearSelector(false)}
                className="text-gray-500 hover:text-black"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default P6Exams;

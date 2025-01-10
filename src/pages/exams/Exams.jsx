import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Exams = () => {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState(null);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [currentLevel, setCurrentLevel] = useState("P6"); // Default level is P6
  const [currentSubLevel, setCurrentSubLevel] = useState(null);

  const levels = {
    P6: {
      title: "P6 Exams",
      exams: [
        "Mathematics",
        "Social Studies",
        "Science Elementary Technology",
        "English",
        "Kinyarwanda",
      ],
      pdfPath: "p6",
    },
    "O'Level": {
      title: "Ordinary Level Exams",
      subLevels: ["Senior 1", "Senior 2", "Senior 3"],
      exams: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Geography",
        "History",
        "Entrepreneurship",
        "English",
        "Kinyarwanda",
      ],
      pdfPath: "ordinary",
    },
    "A'Level": {
      title: "Advanced Level Exams",
      subLevels: ["Senior 4", "Senior 5", "Senior 6"],
      exams: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Geography",
        "History",
        "Computer Science",
        "Economics",
        "Entrepreneurship",
        "General Studies",
      ],
      pdfPath: "advanced",
    },
  };

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - 2020 }, (_, i) => 2020 + i);
  };

  const handleExamClick = (examName) => {
    setSelectedExam(examName);
    setShowYearSelector(true);
  };

  const handleYearSelection = (year) => {
    setShowYearSelector(false);
    navigate("/exam-content", {
      state: {
        lessonName: selectedExam,
        year,
        content: `This is the content for ${selectedExam} in ${year}.`,
        pdfUrl: `/pdfs/${levels[currentLevel].pdfPath}/${selectedExam
          .toLowerCase()
          .replace(" ", "-")}-${year}.pdf`,
      },
    });
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    setCurrentSubLevel(null);
  };

  const handleSubLevelChange = (subLevel) => {
    setCurrentSubLevel(subLevel);
  };

  return (
    <div className="flex-grow p-6  bg-gray-100">
      <div className="flex justify-center items-center mt-6">
        <div className="rounded-sm mb-8 max-w-2xl w-full">
          <div className="flex mb-8 max-w-2xl w-full shadow-md">
            {["P6", "O'Level", "A'Level"].map((level) => (
              <button
                key={level}
                onClick={() => handleLevelChange(level)}
                className={`flex-1 text-center px-4 py-2 font-semibold ${
                  currentLevel === level
                    ? "bg-[#4175B7] border-[1px] border-[#4175B7] text-white"
                    : "bg-white border-[1px] border-gray-200 text-gray-700 hover:bg-gray-300'}"
                }`}
                style={{
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      <h1 className="bg-[#4175B7] text-4xl font-bold text-white py-4 my-6 text-center">
        {levels[currentLevel].title}
      </h1>

      {currentLevel !== "P6" && (
        <div className="mb-8 shadow-lg p-6 rounded bg-white">
          {levels[currentLevel].subLevels.map((subLevel) => (
            <div key={subLevel}>
              <h2 className="text-xl font-bold mb-4 text-center">
                {subLevel.toUpperCase()}
              </h2>
              <div className="flex flex-wrap gap-4 mb-6">
                {levels[currentLevel].exams.map((exam, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleExamClick(exam)}
                    className="shadow-md hover:shadow-lg transition-shadow rounded"
                  >
                    <Button label={exam.toUpperCase()} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {currentLevel === "P6" && (
        <div className="mb-8 shadow-lg p-6 rounded bg-white">
          <div className="flex flex-wrap gap-4">
            {levels[currentLevel].exams.map((exam, idx) => (
              <div
                key={idx}
                onClick={() => handleExamClick(exam)}
                className="shadow-md hover:shadow-lg transition-shadow rounded"
              >
                <Button label={exam.toUpperCase()} />
              </div>
            ))}
          </div>
        </div>
      )}

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

export default Exams;
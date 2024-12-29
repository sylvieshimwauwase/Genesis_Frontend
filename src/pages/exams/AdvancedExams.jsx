import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ExamTaskBar from "./EXamTaskBar";

const AdvancedExams = () => {
  const navigate = useNavigate();

  const examSections = [
    {
      title: "Senior 4 Examinations",
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
        "General studies",
      ],
    },
    {
      title: "Senior 5 Examinations",
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
        "General studies",
      ],
    },
    {
      title: "Senior 6 Examinations",
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
        "General studies",
      ],
    },
  ];

  const handleNavigation = (examName) => {
    navigate(`/exams/advanced/${examName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="flex-grow p-6 pt-12">
      <ExamTaskBar />
      <h1 className="bg-[#4175B7] text-4xl font-bold text-white py-4 my-6 text-center">
        Advanced Level Exams
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
                onClick={() => handleNavigation(`${section.title} ${exam}`)}
                className="shadow-md hover:shadow-lg transition-shadow rounded"
              >
                <Button label={exam.toUpperCase()} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvancedExams;

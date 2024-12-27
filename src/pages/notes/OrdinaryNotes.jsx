import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const OrdinaryNotes = () => {
  const navigate = useNavigate();

  const levels = ["P6", "Ordinary Level", "Advanced Level"];
  const examSections = [
    {
      title: "Senior 1 Notes",
      exams: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Entrepreneurship", "English","Kinyarwanda"],
    },
    {
      title: "Senior 2 Notes",
      exams: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Entrepreneurship", "English","Kinyarwanda"],
    },
    {
      title: "Senior 3 Notes",
      exams: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Entrepreneurship", "English","Kinyarwanda"],
    },
  ];

  const handleNavigation = (examName) => {
    navigate(`/exams/advanced/${examName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="flex-grow p-6 pt-24">
      <h1 className="bg-[#87CCEB] text-4xl font-bold text-white py-4 mt-6 text-center">Ordinary Level Notes</h1>
      {examSections.map((section, index) => (
        <div key={index} className="mb-8 shadow-lg p-6 rounded bg-white">
          <h2 className="text-xl font-bold mt-4 mb-4 text-center">{section.title.toUpperCase()}</h2>
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

export default OrdinaryNotes;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import LevelTaskBar from "../../components/LevelTaskBar";

const P6Notes = () => {
  const navigate = useNavigate();

  const noteSections = [
    {
      title: "P6 Notes",
      exams: ["Mathematics", "Social Studies", "SCience Elementary Technology", "English", "Kinyarwanda"],
    },
  ];

  const handleNavigation = (examName) => {
    navigate(`/exams/p6/${examName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="flex-grow p-6 items-center">
      <LevelTaskBar defaultActiveTab="P6" />
      <h1 className="bg-[#87CCEB] text-4xl font-bold text-white py-4 mt-6 text-center">
        P6 Notes
      </h1>
      {noteSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">
            {section.title}
          </h2>
          <div className="flex flex-wrap gap-4">
            {section.exams.map((exam, idx) => (
              <div
                key={idx}
                onClick={() => handleNavigation(`${section.title} ${exam}`)}
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

export default P6Notes;

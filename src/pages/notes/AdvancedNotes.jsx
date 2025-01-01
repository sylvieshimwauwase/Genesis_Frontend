import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import LevelTaskBar from "../../components/LevelTaskBar";

const AdvancedNotes = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("Advanced Level");

  const levels = ["P6", "Ordinary Level", "Advanced Level"];

  const examSections = {
    "Advanced Level": [
      {
        title: "Senior 4 Notes",
        exams: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Computer Science", "Economics", "Entrepreneurship", "General studies"],
      },
      {
        title: "Senior 5 Notes",
        exams: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Computer Science", "Economics", "Entrepreneurship", "General studies"],
      },
      {
        title: "Senior 6 Notes",
        exams: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Computer Science", "Economics", "Entrepreneurship", "General studies"],
      },
    ],
    // "Ordinary Level": [
    //   {
    //     title: "Senior 1",
    //     exams: ["English", "Mathematics", "Science", "History", "Geography"],
    //   },
    //   {
    //     title: "Senior 2",
    //     exams: ["English", "Mathematics", "Science", "History", "Geography"],
    //   },
    // ],
    // "P6": [
    //   {
    //     title: "Primary 6",
    //     exams: ["Mathematics", "English", "Kinyarwanda", "Science", "Social Studies"],
    //   },
    // ],
  };

  const handleNavigation = (examName) => {
    navigate(`/exams/${selectedLevel.toLowerCase().replace(" ", "-")}/${examName.toLowerCase().replace(" ", "-")}`);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    navigate(`/exams/${level.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="flex-grow p-6">
      <LevelTaskBar defaultActiveTab="Advanced Level" />
      <div className="flex justify-center gap-4 mb-6">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => handleLevelChange(level)}
            className={`px-4 py-2 rounded-md font-semibold transition-all ${
              selectedLevel === level
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {level}
          </button>
        ))}
      </div>
      <h1 className="bg-[#4175B7] text-4xl font-bold text-white py-4 my-6 text-center">
        {selectedLevel} Notes
      </h1>
      {examSections[selectedLevel].map((section, index) => (
        <div key={index} className="mb-8 shadow-md p-6 rounded bg-gray-50">
          <h2 className="text-xl font-bold mb-8 text-center">
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

export default AdvancedNotes;

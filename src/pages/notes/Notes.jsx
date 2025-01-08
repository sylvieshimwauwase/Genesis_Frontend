import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Notes = () => {
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState(null);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [currentLevel, setCurrentLevel] = useState("P6"); // Default level is P6
  const [currentSubLevel, setCurrentSubLevel] = useState(null);

  const levels = {
    P6: {
      title: "P6 Notes",
      notes: [
        "Mathematics",
        "Social Studies",
        "Science Elementary Technology",
        "English",
        "Kinyarwanda",
      ],
      pdfPath: "p6",
    },
    Ordinary: {
      title: "Ordinary Level Notes",
      subLevels: ["Senior 1", "Senior 2", "Senior 3"],
      notes: [
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
    Advanced: {
      title: "Advanced Level Notes",
      subLevels: ["Senior 4", "Senior 5", "Senior 6"],
      notes: [
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

  const handleNoteClick = (noteName) => {
    setSelectedNote(noteName);
    setShowYearSelector(true);
  };

  const handleYearSelection = (year) => {
    setShowYearSelector(false);
    navigate("/subject-content", {
      state: {
        lessonName: selectedNote,
        year,
        content: `This is the content for ${selectedNote} in ${year}.`,
        pdfUrl: `/pdfs/${levels[currentLevel].pdfPath}/${selectedNote
          .toLowerCase()
          .replace(" ", "-")}-${year}.pdf`,
      },
    });
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    setCurrentSubLevel(null);
  };

  return (
    <div className="flex-grow p-6">
      <div className="flex justify-center items-center mt-6">
        <div className="rounded-sm mb-8 max-w-2xl w-full">
          <div className="flex space-x-4">
            {["P6", "Ordinary", "Advanced"].map((level) => (
              <button
                key={level}
                onClick={() => handleLevelChange(level)}
                className={`flex-1 text-center px-4 py-2 font-semibold rounded ${
                  currentLevel === level
                    ? "bg-[#4175B7] text-white border-gray-300"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
                {levels[currentLevel].notes.map((note, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleNoteClick(note)}
                    className="shadow-md hover:shadow-lg transition-shadow rounded"
                  >
                    <Button label={note.toUpperCase()} />
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
            {levels[currentLevel].notes.map((note, idx) => (
              <div
                key={idx}
                onClick={() => handleNoteClick(note)}
                className="shadow-md hover:shadow-lg transition-shadow rounded"
              >
                <Button label={note.toUpperCase()} />
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

export default Notes;

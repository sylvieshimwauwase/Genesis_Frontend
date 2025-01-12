import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import axios from "axios";

const Notes = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState("P6"); // Default level is P6
  const [lessonDetails, setLessonDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const levels = {
    P6: {
      title: "P6 Notes",
      subjects: ["Mathematics", "Social Studies", "Science", "English", "Kinyarwanda"],
    },
    "O'Level": {
      title: "Ordinary Level Notes",
      subLevels: ["Senior 1", "Senior 2", "Senior 3"],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Entrepreneurship", "English", "Kinyarwanda"],
    },
    "A'Level": {
      title: "Advanced Level Notes",
      subLevels: ["Senior 4", "Senior 5", "Senior 6"],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Computer Science", "Economics", "Entrepreneurship", "General Studies"],
    },
  };

  const handleNoteClick = async (subject) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/notes/${currentLevel}/${subject}`);
      setLessonDetails(response.data);
      navigate("/notes-content", {
        state: {
          lessonName: subject,
          pdfUrl: response.data.pdfUrl,
          videoUrl: response.data.videoUrl,
        },
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    setLessonDetails(null);
  };

  const currentLevelData = levels[currentLevel];

  return (
    <div className="flex-grow p-6 bg-gray-100">
      <div className="flex justify-center items-center mt-6">
        <div className="rounded-sm mb-8 max-w-2xl w-full">
          <div className="flex mb-8 max-w-2xl w-full shadow-md">
            {Object.keys(levels).map((level) => (
              <button
                key={level}
                onClick={() => handleLevelChange(level)}
                className={`flex-1 text-center px-4 py-2 font-semibold ${
                  currentLevel === level
                    ? "bg-[#4175B7] border-[1px] border-[#4175B7] text-white"
                    : "bg-white border-[1px] border-gray-200 text-gray-700 hover:bg-gray-300"
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
        {currentLevelData.title}
      </h1>

      {currentLevelData.subLevels && (
        <div className="mb-8 shadow-lg p-6 rounded bg-white">
          {currentLevelData.subLevels.map((subLevel) => (
            <div key={subLevel}>
              <h2 className="text-xl font-bold mb-4 text-center">
                {subLevel.toUpperCase()}
              </h2>
              <div className="flex flex-wrap gap-4 mb-6">
                {currentLevelData.subjects.map((subject, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleNoteClick(subject)}
                    className="shadow-md hover:shadow-lg transition-shadow rounded"
                  >
                    <Button label={subject.toUpperCase()} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {!currentLevelData.subLevels && (
        <div className="mb-8 shadow-lg p-6 rounded bg-white">
          <div className="flex flex-wrap gap-4">
            {currentLevelData.subjects.map((subject, idx) => (
              <div
                key={idx}
                onClick={() => handleNoteClick(subject)}
                className="shadow-md hover:shadow-lg transition-shadow rounded"
              >
                <Button label={subject.toUpperCase()} />
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Notes;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Books = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState("P6"); // Default level is P6

  const levels = {
    P6: {
      title: "P6 Books",
      books: [
        "Mathematics",
        "Social Studies",
        "Science Elementary Technology",
        "English",
        "Kinyarwanda",
      ],
      pdfPath: "p6",
    },
    "O'Level": {
      title: "Ordinary Level Books",
      subLevels: ["Senior 1", "Senior 2", "Senior 3"],
      books: [
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
      title: "Advanced Level Books",
      subLevels: ["Senior 4", "Senior 5", "Senior 6"],
      books: [
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

  const handleBookClick = (subject) => {
    navigate("/books-content", {
      state: {
        lessonName: subject,
        content: `This is the content for ${subject}.`,
        pdfUrl: `/pdfs/notes/${subject.toLowerCase().replace(" ", "-")}.pdf`,
      },
    });
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
  };

  return (
    <div className="flex-grow p-6 bg-gray-100">
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
                {levels[currentLevel].books.map((book, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleBookClick(book)}
                    className="shadow-md hover:shadow-lg transition-shadow rounded"
                  >
                    <Button label={book.toUpperCase()} />
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
            {levels[currentLevel].books.map((book, idx) => (
              <div
                key={idx}
                onClick={() => handleBookClick(book)}
                className="shadow-md hover:shadow-lg transition-shadow rounded"
              >
                <Button label={book.toUpperCase()} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
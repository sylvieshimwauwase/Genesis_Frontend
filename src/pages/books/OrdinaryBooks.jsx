import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import LevelTaskBar from "../../components/LevelTaskBar";

const OrdinaryBooks = () => {
  const navigate = useNavigate();

  const levels = ["P6", "Ordinary Level", "Advanced Level"];
  const bookSections = [
    {
      title: "Senior 1 books",
      books: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Entrepreneurship", "English","Kinyarwanda"],
    },
    {
      title: "Senior 2 books",
      books: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Entrepreneurship", "English","Kinyarwanda"],
    },
    {
      title: "Senior 3 books",
      books: ["Mathematics", "Physics", "Chemistry", "Biology", "Geography", "History", "Entrepreneurship", "English","Kinyarwanda"],
    },
  ];

  const handleNavigation = (bookName) => {
    navigate(`/books/advanced/${bookName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="flex-grow p-6">
      <LevelTaskBar defaultActiveTab="Ordinary Level" />
      <h1 className="bg-[#87CCEB] text-4xl font-bold text-white py-4 mt-6 text-center">
        Ordinary Level books
      </h1>
      {bookSections.map((section, index) => (
        <div key={index} className="mb-8 shadow-lg p-6 rounded bg-white">
          <h2 className="text-xl font-bold mt-4 mb-4 text-center">
            {section.title.toUpperCase()}
          </h2>
          <div className="flex flex-wrap gap-4">
            {section.books.map((book, idx) => (
              <div
                key={idx}
                onClick={() => handleNavigation(`${section.title} ${book}`)}
                className="shadow-md hover:shadow-lg transition-shadow rounded"
              >
                <Button label={book.toUpperCase()} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdinaryBooks;
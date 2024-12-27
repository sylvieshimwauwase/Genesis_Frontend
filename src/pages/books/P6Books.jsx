import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const P6Books = () => {
  const navigate = useNavigate();

  const bookSections = [
    {
      title: "P6 Books",
      books: ["Mathematics", "Social Studies", "SCience Elementary Technology", "English", "Kinyarwanda"],
    },
  ];

  const handleNavigation = (bookName) => {
    navigate(`/books/p6/${bookName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="flex-grow p-6 pt-24 items-center">
      <h1 className="bg-[#87CCEB] text-4xl font-bold text-white py-4 mt-6 text-center">P6 Books</h1>
      {bookSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">{section.title}</h2>
          <div className="flex flex-wrap gap-4">
            {section.books.map((book, idx) => (
              <div key={idx} onClick={() => handleNavigation(`${section.title} ${book}`)}>
                <Button label={book.toUpperCase()} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default P6Books;

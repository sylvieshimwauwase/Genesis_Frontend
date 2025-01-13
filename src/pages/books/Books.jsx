import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import apiService from '../../constants/data.js';

const Books = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState("P6"); // Default level is P6
  const [levels, setLevels] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLevelsAndBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedBooks = await apiService.getAll('books');

        const levelsData = fetchedBooks.reduce((acc, book) => {
          if (!acc[book.level]) {
            acc[book.level] = {
              title: `${book.class_name} Books`,
              books: [],
            };
          }
          acc[book.level].books.push(book);
          return acc;
        }, {});

        setLevels(levelsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLevelsAndBooks();
  }, []);

  const handleBookClick = (book) => {
    navigate("/books-content", {
      state: {
        lessonName: book.title,
        content: `This is the content for ${book.title}.`,
        pdfUrl: book.pdf_document,
      },
    });
  };

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
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

      {currentLevelData && (
        <>
          <h1 className="bg-[#4175B7] text-4xl font-bold text-white py-4 my-6 text-center">
            {currentLevelData.title}
          </h1>

          <div className="mb-8 shadow-lg p-6 rounded bg-white">
            <div className="flex flex-wrap gap-4">
              {currentLevelData.books.map((book) => (
                <div
                  key={book.id}
                  onClick={() => handleBookClick(book)}
                  className="shadow-md hover:shadow-lg transition-shadow rounded"
                >
                  <Button label={book.title.toUpperCase()} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Books;
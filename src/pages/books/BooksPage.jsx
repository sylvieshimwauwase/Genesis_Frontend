import { useLocation } from "react-router-dom";
import DownloadButton from "../../components/DownloadButton";

const BooksPage = () => {
  const location = useLocation();
  const { lessonName, content, pdfUrls } = location.state || {};

  return (
    <div className="flex-grow p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-[#4175B7] mb-6">
        {lessonName ? `${lessonName} Books` : "Lesson Books"}
      </h1>
      <div
        className="bg-white shadow-lg rounded-lg p-6"
        style={{
          userSelect: "none", // Disabling text selection
        }}
        onCopy={(e) => e.preventDefault()} // Disabling copy event
        onContextMenu={(e) => e.preventDefault()} // Disabling right-click
      >
        <p className="text-lg leading-7 text-gray-800">{content}</p>

        {pdfUrls && pdfUrls.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Available Books</h2>
            {pdfUrls.map((pdfUrl, index) => (
              <DownloadButton key={index} pdfUrl={pdfUrl.url} label={pdfUrl.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
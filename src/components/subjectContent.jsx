import { useLocation } from "react-router-dom";

const SubjectContent = () => {
  const location = useLocation();
  const { lessonName, year, content, pdfUrl } = location.state || {};

  return (
    <div className="flex-grow p-6 bg-gray-100">
      {/* Dynamic Header */}
      <h1 className="text-4xl font-bold text-center text-[#4175B7] mb-6">
        {lessonName ? `${lessonName} - ${year}` : "Subject Exams"}
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Display Content */}
        <p className="text-lg leading-7 text-gray-800">{content}</p>

        {/* Download Button */}
        {pdfUrl && (
          <div className="mt-6 text-center">
            <a
              href={pdfUrl}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectContent;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdvancedExamContent = () => {
  const { year } = useParams(); // Get the year from the URL
  const [content, setContent] = useState(null); // Store the content
  const [pdfUrl, setPdfUrl] = useState(""); // Store the download link

  // Simulate fetching content dynamically based on the year
  useEffect(() => {
    const fetchContent = async () => {
      // Replace this with a real API call
      const mockData = {
        2023: {
          text: "This is the content for Advanced Level Exams 2023. It covers Mathematics, Physics, Chemistry, and more.",
          pdfUrl: "https://example.com/advanced-2023.pdf",
        },
        2022: {
          text: "This is the content for Advanced Level Exams 2022. Topics include Biology, Economics, History, and more.",
          pdfUrl: "https://example.com/advanced-2022.pdf",
        },
      };

      const data = mockData[year] || {
        text: "Content not found for the selected year.",
        pdfUrl: "",
      };
      setContent(data.text);
      setPdfUrl(data.pdfUrl);
    };

    fetchContent();
  }, [year]);

  return (
    <div className="flex-grow p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-[#4175B7] mb-6">
        Advanced Level Exam Content - {year}
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Display Content */}
        <p className="text-lg leading-7 text-gray-800">{content}</p>

        {/* Download Button */}
        {pdfUrl && (
          <div className="mt-6 text-center">
            <a
              href={pdfUrl}
              download={`Advanced_Exam_${year}.pdf`}
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

export default AdvancedExamContent;

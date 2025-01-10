import { useLocation } from "react-router-dom";
import DownloadButton from "../../components/DownloadButton";

const NotesPage = () => {
  const location = useLocation();
  const { lessonName, content, pdfUrl, videoUrl } = location.state || {};

  return (
    <div className="flex-grow p-6 bg-gray-100">
      {/* Dynamic Header */}
      <h1 className="text-4xl font-bold text-center text-[#4175B7] mb-6">
        {lessonName ? `${lessonName} Notes` : "Lesson Notes"}
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Display Content */}
        <p className="text-lg leading-7 text-gray-800">{content}</p>

        {/* Video Section */}
        {videoUrl && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Video Lecture</h2>
            <div className="video-container">
              <iframe
                src={videoUrl}
                title="Video Lecture"
                className="w-full h-64 rounded shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Download Button */}
        <DownloadButton pdfUrl={pdfUrl} />
      </div>
    </div>
  );
};

export default NotesPage;

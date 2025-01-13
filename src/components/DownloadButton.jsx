import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DownloadButton = ({ pdfUrl, label }) => {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    // Navigate to the payment page, passing necessary information as state
    navigate("/payment", {
      state: {
        pdfUrl: pdfUrl,
        label: label || "Download PDF",
      },
    });
  };

  if (!pdfUrl) return null;

  return (
    <div className="mt-6 text-center">
      <button
        onClick={handleDownloadClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {label || "Download PDF"}
      </button>
    </div>
  );
};

DownloadButton.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default DownloadButton;
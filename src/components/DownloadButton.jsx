import PropTypes from "prop-types";

const DownloadButton = ({ pdfUrl, label }) => {
  if (!pdfUrl) return null;

  return (
    <div className="mt-6 text-center">
      <a
        href={pdfUrl}
        download
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {label || "Download PDF"}
      </a>
    </div>
  );
};

DownloadButton.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default DownloadButton;
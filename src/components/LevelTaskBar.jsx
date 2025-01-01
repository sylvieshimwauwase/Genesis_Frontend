import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LevelTaskBar = ({ defaultActiveTab, section }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || "");
  const navigate = useNavigate();

  // Define tabs for different sections
  const getTabs = (section) => {
    switch (section) {
      case "books":
        return [
          { label: "P6", route: "/books/p6" },
          { label: "Ordinary Level", route: "/books/ordinary-level" },
          { label: "Advanced Level", route: "/books/advanced-level" },
        ];
      case "notes":
        return [
          { label: "P6", route: "/notes/p6" },
          { label: "Ordinary Level", route: "/notes/ordinary-level" },
          { label: "Advanced Level", route: "/notes/advanced-level" },
        ];
      default:
        return [
          { label: "P6", route: "/exams/p6" },
          { label: "Ordinary Level", route: "/exams/ordinary-level" },
          { label: "Advanced Level", route: "/exams/advanced-level" },
        ];
    }
  };

  // Tabs depend on the section passed to the component
  const tabs = getTabs(section);

  useEffect(() => {
    if (defaultActiveTab) {
      setActiveTab(defaultActiveTab);
    }
  }, [defaultActiveTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab.label);
    navigate(tab.route);
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="border border-gray-300 rounded-sm overflow-hidden shadow-md">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`px-6 py-3 text-sm font-medium border-r last:border-r-0 ${
                activeTab === tab.label
                  ? "bg-white text-black border-blue-500"
                  : "bg-[#4175B7] text-white border-gray-300"
              }`}
              style={{
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelTaskBar;
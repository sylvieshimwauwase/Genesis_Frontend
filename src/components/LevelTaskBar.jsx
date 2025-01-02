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
          { label: "O'\Level", route: "/books/ordinary-level" },
          { label: "A'\Level", route: "/books/advanced-level" },
        ];
      case "notes":
        return [
          { label: "P6", route: "/notes/p6" },
          { label: "O'\Level", route: "/notes/ordinary-level" },
          { label: "A'\Level", route: "/notes/advanced-level" },
        ];
      default:
        return [
          { label: "P6", route: "/exams/p6" },
          { label: "O'\Level", route: "/exams/ordinary-level" },
          { label: "A'\Level", route: "/exams/advanced-level" },
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
      <div className="rounded-sm mb-8 max-w-2xl w-full">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`flex-1 text-center px-4 py-2 font-semibold rounded ${
                activeTab === tab.label
                  ? "bg-[#4175B7] text-white border-gray-300"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
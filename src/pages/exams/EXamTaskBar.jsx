import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExamTaskBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  const tabs = [
    { label: "P6", route: "/exams/p6" },
    { label: "Ordinary Level", route: "/exams/ordinary-level" },
    { label: "Advanced Level", route: "/exams/advanced-level" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.label);
    navigate(tab.route);
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`px-6 py-3 text-sm font-medium border-r last:border-r-0 ${
                activeTab === tab.label
                  ? "bg-white text-black border-blue-500"
                  : "bg-[#4175B7] text-black border-gray-300"
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

export default ExamTaskBar;

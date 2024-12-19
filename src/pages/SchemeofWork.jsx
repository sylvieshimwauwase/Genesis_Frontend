import React, { useState } from 'react';

const Schemeofwork = () => {
  // State to track the selected level
  const [selectedLevel, setSelectedLevel] = useState(null);

  // Handle level selection
  const handleLevelSelection = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form className="bg-gray-100 shadow-md rounded-md p-6 w-full max-w-md">
        {/* Top Buttons */}
        <div className="flex justify-around mb-6">
          <button
            type="button"
            onClick={() => handleLevelSelection('p6')}
            className={`px-4 py-2 rounded-md hover:bg-blue-500 ${
              selectedLevel === 'p6' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
            }`}
          >
            P6
          </button>
          <button
            type="button"
            onClick={() => handleLevelSelection('ordinary')}
            className={`px-4 py-2 rounded-md hover:bg-blue-500 ${
              selectedLevel === 'ordinary' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
            }`}
          >
            Ordinary Level
          </button>
          <button
            type="button"
            onClick={() => handleLevelSelection('advanced')}
            className={`px-4 py-2 rounded-md hover:bg-blue-500 ${
              selectedLevel === 'advanced' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
            }`}
          >
            Advanced Level
          </button>
        </div>

        <div>
          {selectedLevel === 'p6' && (
            <div>
              <h2 className="text-xl font-semibold text-center mb-4">Primary 6 Scheme of Work</h2>
              <div>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      -- Select The Subject --
                    </option>
                    <option value="math">Mathematics</option>
                    <option value="social">Social Studies</option>
                    <option value="science">SET</option>
                    <option value="english">English</option>
                    <option value="kiny">Kinyarwanda</option>
                  </select>
                </div>
            </div>
          )}

          {selectedLevel === 'ordinary' && (
            <div>
              <h2 className="text-xl font-semibold text-center mb-4">Ordinary Level</h2>
              <div className="space-y-4">
                <div>
                  <select
                    id="class"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      -- Choose The Class To View Scheme of Work --
                    </option>
                    <option value="form1">Senior 1</option>
                    <option value="form2">Senior 2</option>
                    <option value="form3">Senior 3</option>
                  </select>
                </div>
                <div>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      -- Select The Subject --
                    </option>
                    <option value="math">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                    <option value="geography">Geography</option>
                    <option value="history">History</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                    <option value="english">English</option>
                    <option value="kinyarwanda">Kinyarwanda</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {selectedLevel === 'advanced' && (
            <div>
              <h2 className="text-xl font-semibold text-center mb-4">Advanced Level</h2>
              <div className="space-y-4">
                <div>
                  <select
                    id="class"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      -- Choose The Class To View Scheme of Work --
                    </option>
                    <option value="form4">Senior 4</option>
                    <option value="form5">Senior 5</option>
                    <option value="form6">Senior 6</option>
                  </select>
                </div>
                <div>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      -- Select The Subject --
                    </option>
                    <option value="math">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                    <option value="geography">Geography</option>
                    <option value="history">History</option>
                    <option value="literature">Literature</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="reset"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Clear
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Schemeofwork;

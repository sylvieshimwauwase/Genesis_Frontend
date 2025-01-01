import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseLessonPlan = () => {
  const [activeTab, setActiveTab] = useState('P6');
  const [classLevel, setClassLevel] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (classLevel && subject) {
      const route = `/lesson-plan/${classLevel}/${subject}`;
      navigate(route);
    } else {
      alert('Please select both class and subject.');
    }
  };

  const handleClear = () => {
    setClassLevel('');
    setSubject('');
  };

  const renderForm = () => {
    let classOptions = [];
    let subjectOptions = [];

    switch (activeTab) {
      case 'P6':
        classOptions = ['Primary 6'];
        subjectOptions = ['Mathematics', 'Science', 'English'];
        break;
      case 'o-level':
        classOptions = ['Senior One', 'Senior Two', 'Senior Three'];
        subjectOptions = ['Mathematics', 'Physics', 'Chemistry'];
        break;
      case 'a-level':
        classOptions = ['Senior Four', 'Senior Five', 'Senior Six'];
        subjectOptions = ['Economics', 'Mathematics', 'Physics'];
        break;
      default:
        break;
    }

    return (
      <form onSubmit={handleSubmit} className="w-full bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="class" className="block text-gray-700 font-medium mb-2">
            Choose The Class ({activeTab})
          </label>
          <select
            id="class"
            value={classLevel}
            onChange={(e) => setClassLevel(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Class</option>
            {classOptions.map((option) => (
              <option key={option} value={option.toLowerCase().replace(' ', '-')}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
            Select The Subject
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Subject</option>
            {subjectOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600"
          >
            Clear!
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600"
          >
            Submit!
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Choose Lesson Plan for Secondary Teachers</h1>

      <div className="flex space-x-4 mb-8 max-w-2xl w-full">
        <button
          onClick={() => setActiveTab('P6')}
          className={`flex-1 text-center px-4 py-2 font-semibold rounded ${activeTab === 'P6' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          P6
        </button>
        <button
          onClick={() => setActiveTab('o-level')}
          className={`flex-1 text-center px-4 py-2 font-semibold rounded ${activeTab === 'o-level' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          O&apos;level
        </button>
        <button
          onClick={() => setActiveTab('a-level')}
          className={`flex-1 text-center px-4 py-2 font-semibold rounded ${activeTab === 'a-level' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          A&apos;level
        </button>
      </div>

      {renderForm()}
    </div>
  );
};

export default ChooseLessonPlan;
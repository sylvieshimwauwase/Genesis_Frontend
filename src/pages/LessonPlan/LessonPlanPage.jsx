import { useParams } from 'react-router-dom';

const LessonPlanPage = () => {
    const { class: classLevel, subject } = useParams();

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Lesson Plan</h1>
            <p className="text-lg text-gray-700 mb-4">
                Class: <span className="font-semibold">{classLevel}</span>
            </p>
            <p className="text-lg text-gray-700">
                Subject: <span className="font-semibold">{subject}</span>
            </p>
            <p className="mt-6 text-gray-600">Display the lesson plan here...</p>
        </div>
    );
};

export default LessonPlanPage;
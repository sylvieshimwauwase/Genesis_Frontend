import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import apiService from '../../constants/data.js';

const Exams = () => {
    const navigate = useNavigate();
    const [currentLevel, setCurrentLevel] = useState("P6"); // Default level is P6
    const [levels, setLevels] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [showYearSelector, setShowYearSelector] = useState(false);

    useEffect(() => {
        const fetchLevelsClassesAndExams = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedLevels = await apiService.getAll('levels');
                const fetchedExams = await apiService.getAll('exams');

                const levelsData = fetchedLevels.reduce((acc, level) => {
                    acc[level.name] = {
                        id: level.id,
                        title: `${level.name} Exams`,
                        classes: {},
                    };
                    return acc;
                }, {});

                fetchedExams.forEach(exam => {
                    if (levelsData[exam.level]) {
                        if (!levelsData[exam.level].classes[exam.class_name]) {
                            levelsData[exam.level].classes[exam.class_name] = {
                                title: `${exam.class_name} Exams`,
                                lessons: {},
                            };
                        }
                        if (!levelsData[exam.level].classes[exam.class_name].lessons[exam.lesson.title]) {
                            levelsData[exam.level].classes[exam.class_name].lessons[exam.lesson.title] = {
                                title: exam.lesson.title,
                                exams: [],
                            };
                        }
                        levelsData[exam.level].classes[exam.class_name].lessons[exam.lesson.title].exams.push(exam);
                    }
                });

                setLevels(levelsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLevelsClassesAndExams();
    }, []);

    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson);
        setShowYearSelector(true);
    };

    const handleYearSelection = (exam) => {
        setShowYearSelector(false);
        navigate("/exam-content", {
            state: {
                lessonName: exam.title,
                year: exam.year,
                content: `This is the content for ${exam.title} in ${exam.year}.`,
                pdfUrl: exam.pdf_document,
            },
        });
    };

    const handleLevelChange = (level) => {
        setCurrentLevel(level);
    };

    const currentLevelData = levels[currentLevel];

    // Sort levels by their id
    const sortedLevels = Object.keys(levels).sort((a, b) => levels[a].id - levels[b].id);

    return (
        <div className="flex-grow p-6 bg-gray-100">
            <div className="flex justify-center items-center mt-6">
                <div className="rounded-sm mb-8 max-w-2xl w-full">
                    <div className="flex mb-8 max-w-2xl w-full shadow-md">
                        {sortedLevels.map((level) => (
                            <button
                                key={level}
                                onClick={() => handleLevelChange(level)}
                                className={`flex-1 text-center px-4 py-2 font-semibold ${
                                    currentLevel === level
                                        ? "bg-[#4175B7] border-[1px] border-[#4175B7] text-white"
                                        : "bg-white border-[1px] border-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                                style={{
                                    transition: "background-color 0.3s, color 0.3s",
                                }}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {currentLevelData && (
                <>
                    <h1 className="bg-[#4175B7] text-4xl font-bold text-white py-4 my-6 text-center">
                        {currentLevelData.title}
                    </h1>

                    <div className="mb-8 shadow-lg p-6 rounded bg-white">
                        {Object.keys(currentLevelData.classes).sort().map((className) => (
                            <div key={className} className="mb-10">
                                <h2 className="text-xl font-bold mb-4 text-center">
                                    {className.toUpperCase()}
                                </h2>
                                <div className="flex flex-wrap gap-4 mb-6">
                                    {Object.keys(currentLevelData.classes[className].lessons).sort().map((lessonTitle) => {
                                        const lesson = currentLevelData.classes[className].lessons[lessonTitle].exams[0].lesson;
                                        return (
                                            <div
                                                key={lessonTitle}
                                                onClick={() => handleLessonClick(currentLevelData.classes[className].lessons[lessonTitle])}
                                                className="shadow-md hover:shadow-lg transition-shadow rounded"
                                            >
                                                <Button label={lesson.display.toUpperCase()}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {showYearSelector && selectedLesson && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-lg font-bold mb-4">Select Year</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {selectedLesson.exams.map((exam) => (
                                <button
                                    key={exam.id}
                                    onClick={() => handleYearSelection(exam)}
                                    className="bg-[#4175B7] text-white py-2 px-4 rounded hover:bg-blue-700"
                                >
                                    {exam.year}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 text-right">
                            <button
                                onClick={() => setShowYearSelector(false)}
                                className="text-gray-500 hover:text-black"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
};

export default Exams;
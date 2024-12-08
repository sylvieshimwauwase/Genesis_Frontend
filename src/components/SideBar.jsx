import React from 'react';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-black-800 text-white flex flex-col p-4">
            <div className="mb-4">
                <h2 className="text-xl">Scheme of Work</h2>
                
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">Lesson Plan</h2>
                
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">Courses</h2>
                
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">Notes</h2>
                
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">Exams</h2>
                
            </div>
        </div>
    );
};


export default SideBar;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Works = () => {
  // const [userActivities, setUserActivities] = useState([]);

  // useEffect(() => {
  //   fetchUserActivities();
  // }, []);

  // const fetchUserActivities = async () => {
  //   try {
  //     const response = await axios.get('/api/activities');
  //     setUserActivities(response.data);
  //   } catch (error) {
  //     console.error('Error fetching user activities:', error);
  //   }
  // };

  const userActivities = [
    { id: 1, activityName: 'Read "Introduction to Biology"', date: '2025-01-11', description: 'Completed reading the "Introduction to Biology" book.' },
    { id: 2, activityName: 'Completed Final Exam', date: '2025-01-09', description: 'Completed the final exam for the Physics course.' },
  ];

  return (
    <div className="lg:px-16 p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Activity History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userActivities.map((activity) => (
          <div key={activity.id} className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-lg font-semibold">{activity.activityName}</h2>
            <p className="text-gray-600">Date: {activity.date}</p>
            <p className="text-gray-700 mt-2">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
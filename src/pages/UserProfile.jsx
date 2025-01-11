import React, { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUser(userData);
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <div className="flex items-center space-x-4">
        <img
          src={`https://api.example.com/avatar/${user.email}`}
          alt="User Avatar"
          className="h-24 w-24 rounded-full border border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <button
          onClick={editing ? handleSave : handleEditToggle}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          {editing ? "Save" : "Edit Profile"}
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          onClick={() => alert("Password change functionality here")}
        >
          Change Password
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
          onClick={() => {
            localStorage.removeItem("userSession");
            window.location.href = "/";
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
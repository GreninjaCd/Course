// src/components/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Welcome to the Dashboard</h2>
      <p className="text-gray-600 mb-4">You’re successfully logged in. 🎉</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;

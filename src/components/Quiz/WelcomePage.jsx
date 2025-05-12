import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../../styles/index.css'; 

const WelcomePage = () => {
  const username = localStorage.getItem('quizUsername');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">Welcome, {username}!</h1>
        <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
          <h2 className="font-semibold text-lg mb-2">Quiz Rules:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Answer all questions to the best of your ability</li>
            <li>You cannot go back to previous questions</li>
            <li>There's no time limit (unless you enable timer)</li>
            <li>Have fun and learn something new!</li>
          </ul>
        </div>
        <button 
          onClick={() => navigate('/quiz')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition w-full"
        >
          Start Quiz Now
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import '../../styles/index.css'; 

const ResultsPage = () => {
  const username = localStorage.getItem('quizUsername');
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || 0;
  const totalQuestions = 10; // Should match your actual question count

  const percentage = Math.round((score / totalQuestions) * 100);
  let message = "";

  if (percentage >= 80) message = "Excellent! 🎉";
  else if (percentage >= 60) message = "Good job! 👍";
  else if (percentage >= 40) message = "Not bad! 😊";
  else message = "Keep practicing! 📚";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">Quiz Completed!</h1>
        <p className="text-lg mb-6">{message}</p>
        
        <div className="bg-purple-100 rounded-lg p-6 mb-8">
          <p className="text-5xl font-bold text-purple-700 mb-2">{score}/{totalQuestions}</p>
          <p className="text-gray-600">{percentage}% correct</p>
        </div>

        <div className="flex flex-col space-y-3">
          <button 
            onClick={() => navigate('/quiz')}
            className="bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Try Again
          </button>
          <button 
            onClick={() => {
              localStorage.removeItem('quizUsername');
              navigate('/');
            }}
            className="border border-purple-600 text-purple-600 py-3 rounded-lg font-medium hover:bg-purple-50 transition"
          >
            Start as New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
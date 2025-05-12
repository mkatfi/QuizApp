import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import React from 'react';


const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (username) => {
    if (!username.trim()) {
      setError('Please enter your name');
      return;
    }
    localStorage.setItem('quizUsername', username);
    navigate('/welcome');
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4 animate-fadeIn">
      <div className="p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Quiz App</h1>
        <AuthForm 
          onSubmit={handleLogin} 
          error={error}
          buttonText="Start Quiz"
        />
      </div>
    </div>
  );
};

export default Login;
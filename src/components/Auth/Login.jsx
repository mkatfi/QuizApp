
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthForm from './AuthForm';
// import React from 'react';

// const Login = () => {
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (username) => {
//     if (!username.trim()) {
//       setError('Please enter your name');
//       return;
//     }
    
//     localStorage.setItem('quizUsername', username);
//     // navigate('/welcome');
//     navigate('/landingPage');
//   };

//   return (
//     <div 
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-blue-100 p-4 animate-fadeIn"
//       aria-label="Login Screen"
//     >
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 ease-in-out">
//         <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
//           Welcome to QuizApp
//         </h1>
//         <AuthForm 
//           onSubmit={handleLogin} 
//           error={error}
//           buttonText="Start Quiz"
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import React from 'react';

const Login = () => {
  const [error, setError] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    
    // Here you would normally validate credentials with your backend
    localStorage.setItem('quizUsername', email);
    navigate('/Home');
  };

  const handleRegister = (username, email, password, confirmPassword) => {
    if (!username.trim() || !email.trim()) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Here you would normally send registration data to your backend
    localStorage.setItem('quizUsername', username);
    navigate('/Home');
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button 
            className={`flex-1 py-4 px-6 text-center font-xl data-[state=active]:border-b-2 data-[state=active]:border-primary-600 data-[state=active]:text-primary-600 dark:data-[state=active]:border-primary-400 dark:data-[state=active]:text-primary-400 rounded-none ${isLoginView ? 'font-bold  text-gray-800 bg-purple-400 focus:ring-purple-500' : 'text-gray-500   '}`}
            onClick={() => setIsLoginView(true)}
          >
            Log In
          </button>
          <button
          
            className={`flex-1 py-4 px-6 text-center font-xl data-[state=active]:border-b-2 data-[state=active]:border-primary-600 data-[state=active]:text-primary-600 dark:data-[state=active]:border-primary-400 dark:data-[state=active]:text-primary-400 rounded-none  ${!isLoginView ? 'font-bold  text-gray-800 bg-purple-400 focus:ring-purple-500' : 'text-gray-500'}`}
            onClick={() => setIsLoginView(false)}
          >
            Register
          </button>
        </div>
        <h1 className="text-4xl font-extrabold text-center text-gray-800 m-4">
            Welcome to QuizApp
        </h1>

        {isLoginView ? (
          <AuthForm 
            isLogin={true}
            onSubmit={handleLogin}
            error={error}
            buttonText="Log in"
          />
        ) : (
          <AuthForm 
            isLogin={false}
            onSubmit={handleRegister}
            error={error}
            buttonText="Create Account"
          />
        )}
      </div>
    </div>
  );
};

export default Login;
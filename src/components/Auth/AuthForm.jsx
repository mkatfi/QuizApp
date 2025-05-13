// import { useState } from 'react';
// import React from 'react';
// import '../../styles/index.css';

// const AuthForm = ({ onSubmit, error, buttonText = "Login" }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [localError, setLocalError] = useState(null);
//   const [showError, setShowError] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Form validation
//     if (!formData.username.trim()) {
//       setLocalError("Please enter a valid username (min 2 characters)");
//       setShowError(true);
//       return;
//     }

//     if (!formData.password || formData.password.length < 6) {
//       setLocalError("Password must be at least 6 characters");
//       setShowError(true);
//       return;
//     }

//     setLocalError(null);
//     setShowError(false);
//     onSubmit(formData.username, formData.password);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     if (showError) setShowError(false);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(prev => !prev);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-6 animate-fadeIn"
//       aria-label="Login Form"
//     >
//       <h2 className="text-xl font-semibold text-center text-gray-700">
//         👋 Login to Your Account
//       </h2>

//       {/* Error messages */}
//       {showError && localError && (
//         <div
//           className="bg-red-100 border border-red-300 text-red-700 text-sm p-3 rounded-md transition duration-200"
//           role="alert"
//         >
//           {localError}
//         </div>
//       )}
//       {error && (
//         <div className="bg-red-200 text-red-800 text-sm p-2 rounded-md">
//           {error}
//         </div>
//       )}

//       {/* Username field */}
//       <div className="relative">
//         <label
//           htmlFor="username"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Username <span className="text-red-500">*</span>
//         </label>
//         <input
//           id="username"
//           name="username"
//           type="text"
//           value={formData.username}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="Enter your username"
//           autoFocus
//           aria-required="true"
//           minLength={2}
//         />
//       </div>

//       {/* Password field */}
// <div className="relative">
//   <label
//     htmlFor="password"
//     className="block text-sm font-medium text-gray-700 mb-1"
//   >
//     Password <span className="text-red-500">*</span>
//   </label>
//   <div className="relative">
//     <input
//       id="password"
//       name="password"
//       type={showPassword ? "text" : "password"}
//       value={formData.password}
//       onChange={handleChange}
//       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//       placeholder="Enter your password"
//       aria-required="true"
//       minLength={6}
//     />
//     <button
//       type="button"
//       onClick={togglePasswordVisibility}
//       className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
//       tabIndex="-1"
//     >
//       {showPassword ? (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//         </svg>
//       ) : (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       )}
//     </button>
//   </div>
//   <div className="flex justify-between mt-1">
//     <small className="text-xs text-gray-500 block">
//       Minimum 6 characters
//     </small>
//     <a href="#" className="text-xs text-purple-600 hover:text-purple-800">
//       Forgot password?
//     </a>
//   </div>
// </div>

//       {/* Remember me checkbox */}
//       <div className="flex items-center">
//         <input
//           id="remember"
//           name="remember"
//           type="checkbox"
//           className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//         />
//         <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
//           Remember me
//         </label>
//       </div>

//       {/* Submit button */}
//       <button
//         type="submit"
//         className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 hover:font-bold transition duration-200 flex items-center justify-center"
//       >
//         {buttonText}
//       </button>

//       {/* Registration link */}
//       <div className="text-center text-sm">
//         <span className="text-gray-600">Don't have an account? </span>
//         <a href="#" className="text-purple-600 hover:text-purple-800  font-medium">
//           Register here
//         </a>
//       </div>
//     </form>
//   );
// };

// export default AuthForm;

import { useState } from "react";
import React from "react";
import "../../styles/index.css";

const AuthForm = ({
  isLogin = true,
  onSubmit,
  error,
  buttonText = "Log in",
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [localError, setLocalError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (isLogin) {
      if (!formData.email.trim()) {
        setLocalError("Please enter your email");
        setShowError(true);

        return;
      }

      if (!formData.password) {
        setLocalError("Please enter your password");
        setShowError(true);
        return;
      }

      onSubmit(formData.email, formData.password);
    } else {
      // Registration validation
      if (!formData.username.trim()) {
        setLocalError("Please enter a username");
        setShowError(true);
        return;
      }

      if (!formData.email.trim()) {
        setLocalError("Please enter a valid email");
        setShowError(true);
        return;
      }

      if (!formData.password || formData.password.length < 6) {
        setLocalError("Password must be at least 6 characters");
        setShowError(true);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setLocalError("Passwords do not match");
        setShowError(true);
        return;
      }

      onSubmit(
        formData.username,
        formData.email,
        formData.password,
        formData.confirmPassword
      );
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (showError) setShowError(false);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {showError && localError && (
          <div
            className="bg-red-100 border border-red-300 text-red-700 text-sm p-3 rounded-md transition duration-200"
            role="alert"
          >
            {localError}
          </div>
        )}

        {error && (
          <div
            className="bg-red-100 border border-red-300 text-red-700 text-sm p-3 rounded-md transition duration-200"
            role="alert"
          >
            {error}
          </div>
        )}
        <h2 className="text-xl font-semibold text-center text-gray-700">
          👋 Login to Your Account
        </h2>

        {/* Username field - only for registration */}
        {!isLogin && (
          <div>
            <label
              htmlFor="username"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="johndoe"
            />
          </div>
        )}

        {/* Email field */}

        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Password field */}
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              aria-required="true"
              minLength={6}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
              tabIndex="-1"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex justify-between mt-1">
            <small className="text-xs text-gray-500 block">
              Minimum 6 characters
            </small>
            <a
              href="#"
              className="text-xs text-purple-600 hover:text-purple-800"
            >
              Forgot password?
            </a>
          </div>
        </div>

        {/* Confirm Password field - only for registration */}
        {!isLogin && (
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
                aria-required="true"
                minLength={6}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                tabIndex="-1"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex justify-between mt-1">
              <small className="text-xs text-gray-500 block">
                Minimum 6 characters
              </small>
            </div>
          </div>
        )}

        {/* Remember me checkbox - only for login */}
        {isLogin && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          {buttonText}
        </button>

        {/* OAuth options */}
        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or {isLogin ? "continue with" : "register with"}
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex justify-center items-center py-2 px-4 border border-purple-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Google</span>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex justify-center items-center py-2 px-4 border border-purple-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Facebook</span>
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;

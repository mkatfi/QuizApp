import React from 'react';
import '../../styles/index.css'; // Adjust the path as necessary
const Button = ({ children, onClick, className = '', disabled = false }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded-md font-medium transition ${className} ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
        }`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
import React from 'react';
import '../../styles/index.css'; 
const ProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
        <div className="text-xs text-gray-500 mt-1">
          Question {current} of {total}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
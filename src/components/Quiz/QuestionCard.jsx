import React from 'react';
import '../../styles/index.css'; 
const QuestionCard = ({ question, selectedOption, onSelect }) => {
    return (
      <div className="bg-white m-5 p-5 rounded-lg animate-fadeIn">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          {question.question}
        </h2>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let optionClass = "p-3 border rounded-md cursor-pointer transition";
            
            if (selectedOption !== null) {
              if (option === question.correctAnswer) {
                optionClass += " bg-green-100 border-green-500";
              } else if (option === selectedOption && selectedOption !== question.correctAnswer) {
                optionClass += " bg-red-100 border-red-500";
              } else {
                optionClass += " opacity-70";
              }
            } else {
              optionClass += " hover:bg-purple-50 hover:border-purple-300";
            }
  
            return (
              <div
                key={index}
                className={optionClass}
                onClick={() => !selectedOption && onSelect(option)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default QuestionCard;
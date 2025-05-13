import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizQuestions } from '../../data/quizData';
import QuestionCard from './QuestionCard';
import ProgressBar from '../Shared/ProgressBar';
import Timer from '../Shared/Timer';
import React from 'react';
import '../../styles/index.css'; 

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    
    // Update score if correct
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setTimeLeft(30);
      } else {
        navigate('/results', { state: { score } });
      }
    }, 1000);
  };

  const handleTimeout = () => {
    handleAnswer(null); // Auto-skip when time runs out
  };

  return (
    <div className="max-w-3xl mx-auto p-10 min-h-screen flex flex-col justify-between animate-fadeIn">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Quiz Time!
      </h1>
      <div className="text-center mb-4">
        <p className="text-lg text-gray-700">
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </p>
        <p className="text-lg  text-gray-700">
          Score: {score} / {quizQuestions.length} 
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={quizQuestions.length} 
        />
        <Timer time={timeLeft} onTimeout={handleTimeout} />
      </div>
      
      <div className="flex-grow">
        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelect={handleAnswer}
        />
      </div>
      
      <div className="mt-6 text-gray-500 text-sm">
        Difficulty: {currentQuestion.difficulty}
      </div>
    </div>
  );
};

export default QuizPage;
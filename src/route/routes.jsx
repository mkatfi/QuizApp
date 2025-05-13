import {Routes, Route } from 'react-router-dom';
import Login from '../components/Auth/Login';
import WelcomePage from '../components/Quiz/WelcomePage';
import QuizPage from '../components/Quiz/QuizPage';
import ResultsPage from '../components/Quiz/ResultsPage';
import React from 'react';
import LandingPage from '../components/pages/LandingPage';
import Home from '../components/pages/Home';

const Routing = () => {
  return (
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/landingPage" element={<LandingPage />} />
    </Routes>
  );
};

export default Routing;  
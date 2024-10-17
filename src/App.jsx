import React, { useState, useEffect } from 'react';
import Questions from './components/Questions/Questions';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Navigation from './components/Navigation/Navigation';
import questionsData from './questions.json';
import './App.scss';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isAnswerValid, setIsAnswerValid] = useState(true);

  useEffect(() => {
    setQuestions(questionsData.questions);
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleValidationChange = (isValid) => {
    setIsAnswerValid(isValid);
  }

  // Submission of answers
  const handleSubmit = () => {
    downloadJSON(answers, 'answers.json')
  };

  const downloadJSON = (data, filename) => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  return (
    <div className="survey-container">
      {questions.length > 0 && (
        <>
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={questions.length}
          />
          <Questions
            question={questions[currentQuestionIndex]}
            onAnswerChange={handleAnswerChange}
            answer={answers[questions[currentQuestionIndex]?.id]}
            onValidationChange={handleValidationChange}
          />
          <Navigation
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
            isNextDisabled={!isAnswerValid}
          />
        </>
      )}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion"; // assuming you have it in another file

interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: string;
}

interface MultiQuestionProps {
  TheoristQuestions: Question[];
}

export const MultiQuestionContainer: React.FC<MultiQuestionProps> = ({ TheoristQuestions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < TheoristQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentQuestion = TheoristQuestions[currentIndex];

  return (
    <div className="multi-question-container">
      <MultipleChoiceQuestion
        key={currentIndex}
        question={currentQuestion.question}
        options={currentQuestion.options}
        correctAnswerIndex={currentQuestion.correctAnswerIndex}
        feedback={currentQuestion.feedback}
      />

      <div className="navigation-buttons">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="nav-btn prev-btn"
        >
          Previous
        </button>
        <span className="question-progress">
          {currentIndex + 1} / {TheoristQuestions.length}
        </span>
        <button
          onClick={handleNext}
          disabled={currentIndex === TheoristQuestions.length - 1}
          className="nav-btn next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

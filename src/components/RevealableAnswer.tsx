import React, { useState } from 'react';

interface RevealableAnswerProps {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const RevealableAnswer: React.FC<RevealableAnswerProps> = ({ question, answer }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="revealable-container">
      <div className="question-content">
        {question}
      </div>
      
      <button 
        className="reveal-button"
        onClick={() => setIsRevealed(!isRevealed)}
      >
        {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
      </button>

      {isRevealed && (
        <div className="answer-content">
          {answer}
        </div>
      )}
    </div>
  );
};

export default RevealableAnswer;
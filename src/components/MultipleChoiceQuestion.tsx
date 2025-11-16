import React, { useState } from 'react';

interface MCQProps {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: string;
}

export const MultipleChoiceQuestion: React.FC<MCQProps> = ({ question, options, correctAnswerIndex, feedback }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelected(index);
    setIsAnswered(true);
  };

  const getButtonClass = (index: number) => {
    if (!isAnswered) return '';
    if (index === correctAnswerIndex) return 'correct';
    if (index === selected) return 'incorrect';
    return '';
  };

  return (
    <div className="mcq-container">
      <p className="question-text">{question}</p>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${getButtonClass(index)}`}
            onClick={() => handleSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
      {isAnswered && (
        <div className={`feedback ${selected === correctAnswerIndex ? 'correct' : 'incorrect'}`}>
          {selected === correctAnswerIndex ? 'Correct! ' : 'Not quite. '}
          {feedback}
        </div>
      )}
    </div>
  );
};
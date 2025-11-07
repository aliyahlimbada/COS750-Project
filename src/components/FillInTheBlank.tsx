import React, { useState } from 'react';

interface FITBProps {
  parts: (string | null)[];
  correctAnswers: string[];
  feedback: string;
}

export const FillInTheBlank: React.FC<FITBProps> = ({ parts, correctAnswers, feedback }) => {
  const numBlanks = parts.filter(p => p === null).length;
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(numBlanks).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, blankIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[blankIndex] = e.target.value;
      return newAnswers;
    });
  };

  const getInputClass = (blankIndex: number) => {
    if (!isSubmitted) return '';
    const isCorrect = userAnswers[blankIndex].trim().toLowerCase() === correctAnswers[blankIndex].trim().toLowerCase();
    return isCorrect ? 'correct' : 'incorrect';
  };

  let blankCounter = -1;

  return (
    <div>
      <div className="fitb-container">
        {parts.map((part, index) => {
          if (part !== null) {
            return <span key={index}>{part}</span>;
          } else {
            blankCounter++;
            const currentBlankIndex = blankCounter;
            return (
              <input
                key={index}
                className={`blank-input ${getInputClass(currentBlankIndex)}`}
                value={userAnswers[currentBlankIndex]}
                onChange={(e) => handleInputChange(e, currentBlankIndex)}
                disabled={isSubmitted}
              />
            );
          }
        })}
      </div>
      
      {!isSubmitted && <button className="check-answer-btn" onClick={() => setIsSubmitted(true)}>Check Answer</button>}
      
      {isSubmitted && (
        <div className="feedback correct">
          {feedback}
        </div>
      )}
    </div>
  );
};
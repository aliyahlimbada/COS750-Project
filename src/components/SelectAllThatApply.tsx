import React, { useMemo, useState } from 'react';

interface SATAProps {
  question: string;
  options: string[];
  correctAnswerIndices: number[];
  feedback: string;
}

export const SelectAllThatApply: React.FC<SATAProps> = ({ question, options, correctAnswerIndices, feedback }) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleToggle = (index: number) => {
    if (isSubmitted) return;
    setSelectedIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleCheckAnswer = () => {
    setIsSubmitted(true);
  };

  // Memoize the result to avoid re-calculating on every render
  const isCorrect = useMemo(() => {
    if (!isSubmitted) return false;
    // Sort both arrays to ensure order doesn't matter for comparison
    const sortedSelected = [...selectedIndices].sort();
    const sortedCorrect = [...correctAnswerIndices].sort();
    return JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
  }, [isSubmitted, selectedIndices, correctAnswerIndices]);

  const getLabelClass = (index: number) => {
    if (!isSubmitted) return '';
    const isCorrectAnswer = correctAnswerIndices.includes(index);
    const isSelected = selectedIndices.includes(index);

    if (isCorrectAnswer) return 'correct';
    if (isSelected && !isCorrectAnswer) return 'incorrect';
    return '';
  };

  return (
    <div>
      <p className="question-text">{question}</p>
      <div className="sata-options">
        {options.map((option, index) => (
          <label key={index} className={`option-label ${getLabelClass(index)}`}>
            <input 
              type="checkbox" 
              checked={selectedIndices.includes(index)}
              onChange={() => handleToggle(index)}
              disabled={isSubmitted}
            />
            {option}
          </label>
        ))}
      </div>
      
      {!isSubmitted && <button className="check-answer-btn" onClick={handleCheckAnswer}>Check Answer</button>}

      {isSubmitted && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          <strong>{isCorrect ? 'Perfect!' : 'Almost!'}</strong> {feedback}
        </div>
      )}
    </div>
  );
};
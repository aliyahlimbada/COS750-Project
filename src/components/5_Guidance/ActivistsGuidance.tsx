import React, { useState } from 'react';

const concepts = {
  Component: 'The Contract (Interface)',
  Leaf: 'The Individual Part',
  Composite: 'The Container',
  Aggregation: 'Has-a Relationship ◇',
  Composition: 'Owns-a Relationship ◆',
};

export const ActivistsGuidance = () => {
  const [solved, setSolved] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent, category: string) => {
    e.preventDefault();
    const concept = e.dataTransfer.getData("text/plain");
    if (concept === category) {
      setSolved([...solved, concept]);
    }
  };

  const handleDragStart = (e: React.DragEvent, concept: string) => {
    e.dataTransfer.setData("text/plain", concept);
  };

  const remainingConcepts = Object.keys(concepts).filter(c => !solved.includes(c));

  return (
         <div className="visual-container">
    <div className="feature-request-ticket">
    <div className="guidance-container sorting-game">
      <h4>Test your knowledge: Drag the term to its definition!</h4>
      <div className="game-board">
        <div className="definitions">
          {Object.entries(concepts).map(([key, value]) => (
            <div 
              key={key} 
              className={`drop-zone ${solved.includes(key) ? 'solved' : ''}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, key)}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="terms">
          {remainingConcepts.length > 0 ? (
            remainingConcepts.map(key => (
              <div 
                key={key} 
                className="draggable" 
                draggable 
                onDragStart={(e) => handleDragStart(e, key)}
              >
                {key}
              </div>
            ))
          ) : (
            <div className="win-message">🎉 Well done! 🎉</div>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

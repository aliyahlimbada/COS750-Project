import React from 'react';
import './LearningStyleSelector.scss'; // should probs move to styles folder but file paths make me sad

export type LearningStyle = 'Activist' | 'Theorist' | 'Reflector' | 'Pragmatist';

interface LearningStyleSelectorProps {
  selectedStyle: LearningStyle;
  onStyleChange: (style: LearningStyle) => void;
}

const LearningStyleSelector: React.FC<LearningStyleSelectorProps> = ({ selectedStyle, onStyleChange }) => {
  const styles: LearningStyle[] = ['Activist', 'Theorist', 'Reflector', 'Pragmatist'];

  return (
    <div className="learning-style-selector">
      <h4>Choose Your Learning Style:</h4>
      <div className="style-buttons">
        {styles.map((style) => (
          <button
            key={style}
            className={selectedStyle === style ? 'active' : ''}
            onClick={() => onStyleChange(style)}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearningStyleSelector;
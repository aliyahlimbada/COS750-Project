import React, { type JSX } from "react";
import { Brain, BookOpen, Wrench, Eye } from "lucide-react";

export type LearningStyle = "Activist" | "Theorist" | "Reflector" | "Pragmatist";

interface LearningStyleSelectorProps {
  selectedStyle: LearningStyle;
  onStyleChange: (style: LearningStyle) => void;
}

const icons: Record<LearningStyle, JSX.Element> = {
  Activist: <Brain />,
  Theorist: <BookOpen />,
  Reflector: <Eye />,
  Pragmatist: <Wrench />,
};

const LearningStyleSelector: React.FC<LearningStyleSelectorProps> = ({
  selectedStyle,
  onStyleChange,
}) => {
  const styles: LearningStyle[] = ["Activist", "Theorist", "Reflector", "Pragmatist"];

  return (
    <div className="learning-style-selector">
      {styles.map((style) => (
        <button
          key={style}
          className={`learning-style-btn ${selectedStyle === style ? "active" : ""}`}
          onClick={() => onStyleChange(style)}
        >
          <div className="icon">{icons[style]}</div>
          <span className="label">{style}</span>
        </button>
      ))}
    </div>
  );
};

export default LearningStyleSelector;

import React from "react";

interface ProgressBarProps {
  progress: number; // 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

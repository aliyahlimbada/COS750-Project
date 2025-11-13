import { useState } from "react";
import { MultipleChoiceQuestion } from "../MultipleChoiceQuestion";
import { SelectAllThatApply } from "../SelectAllThatApply";

export const ReflectorsPerformance = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = [
    {
      type: "mcq",
      title: "Reflector Question 1 (Multiple Choice)",
      scenario: (
        <div className="scenario">
          <strong>Scenario:</strong> You are studying the provided UML diagram for the Composite Design Pattern.
          <br />
          <img src="/src/assets/composite.jpg" alt="Composite Pattern UML" />
        </div>
      ),
      component: (
        <MultipleChoiceQuestion
          question="After studying this diagram, which statement best describes what makes the Composite pattern unique?"
          options={[
            "It allows clients to treat individual objects and compositions uniformly.",
            "It ensures only one instance of each object exists in memory.",
            "It separates the algorithm from the data structure.",
            "It provides a way to create objects without specifying their concrete class.",
          ]}
          correctAnswerIndex={0}
          feedback="This is the defining feature of the Composite pattern: both Leaf and Composite share the same interface."
        />
      ),
    },
    {
      type: "selectAll",
      title: "Reflector Question 2 (Select All That Apply)",
      scenario: (
        <div className="scenario">
          <p>Study this organisational hierarchy:</p>
          <img src="/src/assets/org structure.png" width="50%" alt="Org structure" />
        </div>
      ),
      component: (
        <SelectAllThatApply
          question="After observing this structure, select ALL the statements that are true about applying the Composite pattern here:"
          options={[
            "A. Developers and Designers are Leaf nodes (no children)",
            "B. Managers are Composite nodes (have children)",
            "C. The CEO is a Composite node (has children)",
            "D. All employees should share a common interface (e.g., Employee)",
            "E. Managers can only contain Developers, not other Managers",
            "F. You can call the same operation (e.g., getSalary()) on any employee",
          ]}
          correctAnswerIndices={[0, 1, 2, 3, 5]} // A, B, C, D, F
          feedback="Correct! E is wrong because the power of the pattern is that a Composite (Manager) can contain any other Component, including other Composites (Managers)."
        />
      ),
    },
  ];

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="visual-container">
      <div className="feature-request-ticket">
        <div className="assessment-container">
          <div className="question-wrapper" style={{ minHeight: "400px" }}>
            <h5>{currentQuestion.title}</h5>
            {currentQuestion.scenario && currentQuestion.scenario}
            {currentQuestion.component}
          </div>

          <div className="navigation-buttons">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="nav-btn prev-btn"
            >
              Previous
            </button>
            <span className="question-progress">
              {currentIndex + 1} / {questions.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              className="nav-btn next-btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

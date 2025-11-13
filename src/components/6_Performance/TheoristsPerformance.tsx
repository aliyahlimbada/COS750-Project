import { useState } from "react";
import { FillInTheBlank } from "../FillInTheBlank";
import { MultipleChoiceQuestion } from "../MultipleChoiceQuestion";

export const TheoristsPerformance = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = [
    {
      type: "fill",
      title: "Theorist Question 1 (Fill in the Blank)",
      component: (
        <FillInTheBlank
          parts={[
            '"In the Composite Design Pattern, the ', null, 
            ' defines the common interface, the ', null, 
            ' represents individual end objects, and the ', null, 
            ' manages child components."'
          ]}
          correctAnswers={["Component", "Leaf", "Composite"]}
          feedback="The correct roles are Component (the interface), Leaf (the simple element), and Composite (the container)."
        />
      ),
    },
    {
      type: "mcq",
      title: "Theorist Question 2 (Multiple Choice)",
      scenario: (
        <div className="scenario">
          <strong>Scenario:</strong> You are designing the UML class structure for a file system using the Composite pattern.
        </div>
      ),
      component: (
        <MultipleChoiceQuestion
          question="In UML, why must both File and Folder inherit from FileSystemElement?"
          options={[
            "To allow both classes to share common operations like display() and getSize() through polymorphism.",
            "Because inheritance is required to avoid object duplication.",
            "To ensure all classes are instantiated only once.",
          ]}
          correctAnswerIndex={0}
          feedback="This shared interface enables uniform treatment of simple and composite objects through polymorphism."
        />
      ),
    },
    {
      type: "mcq-group",
      title: "Reflector Question 3 (Multiple Choice Series)",
      scenario: (
        <div className="scenario">
          <strong>Scenario:</strong> Consider these two possible designs for a graphics system:
          <p><strong>A</strong></p>
          <img src="/src/assets/theoristOptionA.png" width="50%" />
          <p><strong>B</strong></p>
          <img src="/src/assets/theoristOptionB.png" width="50%" />
        </div>
      ),
      component: (
        <>
          <MultipleChoiceQuestion
            question="i. From a theoretical standpoint, which design correctly implements the Composite pattern?"
            options={[
              "Design A",
              "Design B",
              "Both are equally valid",
              "Neither is correct",
            ]}
            correctAnswerIndex={0}
            feedback="Group references the abstract Shape interface, enabling polymorphism."
          />
          <MultipleChoiceQuestion
            question="ii. What OOP principle does Design B violate that Design A follows?"
            options={[
              "Encapsulation",
              "Polymorphism",
              "Inheritance",
              "Abstraction",
            ]}
            correctAnswerIndex={1}
            feedback="Design A uses the abstract interface Shape while Design B uses the concrete class Circle."
          />
          <MultipleChoiceQuestion
            question="iii. What structural capability does Design A have that Design B lacks?"
            options={[
              "Group can contain Circles",
              "Group can be created at runtime",
              "Group can contain other Groups",
              "Group can implement multiple operations",
            ]}
            correctAnswerIndex={2}
            feedback="Only Design A allows recursive composition because Group references Shape (which Group also is)."
          />
        </>
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

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
      title: "Theorist Question 3 (Multiple Choice Series)",
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
    {
      type: "mcq-group",
      title: "Theorist Question 4 (Multiple Choice)",
      scenario: (
        <div className="scenario">
          <strong>Scenario:</strong> A software architect proposes using the Composite pattern for a university course registration system where:
          <ul>
            <li>Individual courses are Leaf node;</li>
            <li>Course bundles (e.g., "First Year Engineering Package") are Composite nodes;</li>
            <li>Students can register for individual courses OR entire bundles.</li>
          </ul>
          <p>The architect states: "We need <code>register(Student s)</code> and <code>calculateTotalCredits()</code> operations. I'll put <code>register()</code> in the Component interface but <code>calculateTotalCredits()</code> only in Composite since only bundles need to sum credits."</p>
        </div>
      ),
      component: (
        <MultipleChoiceQuestion
          question="Analyse this design decision. What fundamental principle of the Composite pattern does this violate?"
          options={[
            "A. It violates the part-whole hierarchy principle - operations should only be in Composite",
            "B. It violates uniform treatment - clients cannot treat Leaf and Composite identically through the Component interface",
            "C. It violates the tree structure principle - all operations must use recursion",
            "D. This design is correct - operations should only be placed where they're needed",
          ]}
          correctAnswerIndex={1}
          feedback="By placing calculateTotalCredits() only in Composite breaks uniform treatment."
        />
      ),
    },
    {
      type: "mcq-group",
      title: "Theorist Question 5 (Multiple Choice)",
      scenario: (
        <div className="scenario">
          <strong>Scenario:</strong> A team implements a file system hierarchy using the Composite pattern:
          <ul>
            <li>Component: FileSystemElement;</li>
            <li>Leaf: File;</li>
            <li>Composite: Folder.</li>
          </ul>
          <p>After deployment, they realise users frequently need to "search for all files of type X" throughout the hierarchy. The team debates solutions:</p>
          <p><strong>Solution 1:</strong> Add <pre><code>{`search(String type): List<File>`}</code></pre> to Component interface. Leaf checks its own type and returns itself if matching. Composite recursively calls <code>search()</code> on all children and aggregates results.</p>
          <p><strong>Solution 2:</strong> Keep the Composite structure unchanged. Create a separate <code>FileSearcher</code> class that traverses the structure and performs searches.</p>
        </div>
      ),
      component: (
        <MultipleChoiceQuestion
          question="Analyse these solutions in terms of the Composite pattern's structure. Which statement is most accurate?"
          options={[
            "A. Solution 1 is better - all operations should be in the Component interface for uniform treatment",
            "B. Solution 2 is better - it suggests the operation doesn't belong in the core pattern and hints at the Iterator or Visitor pattern",
            "C. Both violate the Composite pattern by adding functionality after deployment.",
            "D. Solution 1 violates the pattern because search operations cannot use the tree structure.",
          ]}
          correctAnswerIndex={1}
          feedback="We need to distinguish between operations intrinsic to the Composite structure (which belong in Component) and external traversal algorithms (which suggest separate patterns)."
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
            <h3>{currentQuestion.title}</h3>
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

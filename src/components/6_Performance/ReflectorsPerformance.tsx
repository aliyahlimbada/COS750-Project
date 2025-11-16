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
          feedback="E is wrong because the power of the pattern is that a Composite (Manager) can contain any other Component, including other Composites (Managers)."
        />
      ),
    },
    {
      type: "mcq",
      title: "Reflector Question 3 (Multiple Choice)",
      scenario: (
        <div className="scenario">
          <strong>Scenario:</strong> A development team built an organisational hierarchy system using the Composite pattern six months ago:
          <ul>
            <li>Component: OrganizationUnit (operations: <code>getName()</code>, <code>getBudget()</code>, <code>generateReport()</code>);</li>
            <li>Leaf: Employee;</li>
            <li>Composite: Department.</li>
          </ul>
          <p>Initially, <code>generateReport()</code> simply printed names. Now, they need reports to include: employee count, total budget, budget variance, and hierarchical structure visualization.<br></br>
          The team reports: "Our Leaf and Composite classes have become massive. Every new report requirement means modifying both classes. We're spending more time maintaining the hierarchy classes than adding new features."
          </p>
        </div>
      ),
      component: (
        <MultipleChoiceQuestion
          question="Reflecting on this evolution, what does this experience reveal about the Composite pattern's strengths and limitations?"
          options={[
            "A. The pattern failed - they should have used a different pattern from the start.",
            "B. The pattern succeeded at its core purpose (building hierarchies) but wasn't designed to handle evolving external operations.",
            "C. They implemented the pattern incorrectly - proper Composite implementations don't have this problem.",
            "D. This is expected behavior - all design patterns require increasing maintenance over time.",
          ]}
          correctAnswerIndex={1}
          feedback="The pattern succeeded at its core mission (building uniform hierarchies) but revealed its limitation (handling proliferating operations on that hierarchy)."
        />
      ),
    },
    {
      type: "selectAll",
      title: "Reflector Question 4 (Select All That Apply)",
      scenario: (
        <div className="scenario">
          Two students independently implement a graphics drawing application using the Composite pattern:<br></br><br></br>
          <strong>Student 1: </strong>creates:
          <ul>
            <li>Component: Shape (operations: <code>draw()</code>, <code>getArea()</code>);</li>
            <li>Leaf: Circle, Rectangle, Triangle;</li>
            <li>Composite: GroupShape.</li>
          </ul>
          Later reports: "The pattern worked perfectly. I can group shapes into larger compositions, draw everything with one <code>draw()</code> call, and calculate total areas. It feels natural and the code is clean."
          <br></br><br></br>
          <strong>Student 2: </strong>creates:
          <ul>
            <li>Component: Drawing (operations: <code>render()</code>, <code>getComplexity()</code>);</li>
            <li>Leaf: Pixel;</li>
            <li>Composite:  Line, Rectangle, ComplexDrawing.</li>
          </ul>
          Later reports: "This feels wrong. My Pixels need to know their parent Line to render correctly. I'm passing context information everywhere. The 'uniform treatment' feels forced - Pixels are fundamentally different from Lines."
        </div>
      ),
      component: (
        <SelectAllThatApply
          question=" Reflecting on these two experiences, select ALL insights that explain the different outcomes:"
          options={[
            "A. Student 1's domain had natural part-whole relationships where parts are meaningful independently",
            "B. Student 2 chose the wrong granularity - Pixels shouldn't be the Leaf level in this pattern",
            "C. Student 1's operations (draw, getArea) work locally without needing context from ancestors",
            "D. Student 2's pattern is incorrectly implemented - proper Composite never needs parent context",
            "E. These experiences show the pattern only works for specific types of hierarchies, not all tree structures",
          ]}
          correctAnswerIndices={[0, 1, 2, 4]} // A, B, C, E
          feedback="D suggests proper Composite never needs parent context."
        />
      ),
    },
    {
      type: "mcq",
      title: "Reflector Question 5 (Multiple Choice)",
      scenario: (
        <div className="scenario">
          <strong>Scenario:</strong> During a case study review, you examine two different applications of the Composite pattern:<br></br><br></br>
          <strong>Application A - Menu System: </strong>
          <ul>
            <li>Component: MenuItem (operations: <code>display()</code>, <code>execute()</code>);</li>
            <li>Leaf: ActionItem (e.g "Save File");</li>
            <li>Composite: SubMenu (e.g., "File" menu containing multiple MenuItems).</li>
          </ul>
          Result: Clients traverse menus uniformly. Adding new menu structures is trivial. Displaying nested menus works recursively and elegantly.          <br></br><br></br>
          <strong>Application B - Project Management:</strong>
          <ul>
            <li>Component: Task (operations: <code>complete()</code>, <code>estimateTime()</code>);</li>
            <li>Leaf: AtomicTask (e.g., "Write unit test");</li>
            <li>Composite: Project (contains subtasks).</li>
          </ul>
          Result: Clients can treat tasks uniformly. But the team notes: "When we complete a Composite (mark entire Project done), we want its children to auto-complete. When we estimate time for Projects, we need to account for dependencies between subtasks, not just sum them. The pattern handles structure well but doesn't naturally express these workflow rules."        </div>
      ),
      component: (
        <MultipleChoiceQuestion
          question="Reflecting on both applications, what principle about the Composite pattern do these cases illuminate?"
          options={[
            "A. Application B is incorrectly implemented - proper Composite patterns handle all domain logic.",
            "B. The Composite pattern excels at structural uniformity but doesn't inherently model behavioral relationships between elements.",
            "C. Application A is simpler, so it appears to work better, but both are equally appropriate uses.",
            "D. Application B should have used a different pattern entirely - tasks with dependencies don't fit Composite.",
          ]}
          correctAnswerIndex={1}
          feedback="The Composite pattern excels at structural uniformity (building hierarchies with uniform treatment) but doesn't inherently model behavioral relationships between elements."
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

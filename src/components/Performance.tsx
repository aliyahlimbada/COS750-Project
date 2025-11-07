import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';
import { SelectAllThatApply } from './SelectAllThatApply';
import { FillInTheBlank } from './FillInTheBlank';

export const ReflectorsPerformance = () => (
  <div className="assessment-container">
    <div className="question-wrapper">
      <h5>Reflector Question 1 (Multiple Choice)</h5>
      <div className="scenario">
        <strong>Scenario:</strong> You are studying the provided UML diagram for the Composite Design Pattern.<br></br>
        <img src='/src/assets/composite.jpg'></img>
      </div>
      <MultipleChoiceQuestion
        question="After studying this diagram, which statement best describes what makes the Composite pattern unique?"
        options={[
          'It allows clients to treat individual objects and compositions uniformly.',
          'It ensures only one instance of each object exists in memory.',
          'It separates the algorithm from the data structure.',
          'It provides a way to create objects without specifying their concrete class.'
        ]}
        correctAnswerIndex={0}
        feedback="This is the defining feature of the Composite pattern: both Leaf and Composite share the same interface."
      />
    </div>

    <div className="question-wrapper">
      <h5>Reflector Question 2 (Select All That Apply)</h5>
      <div className="scenario">
        <p>Study this organisational hierarchy:</p>
        <img src='/src/assets/org structure.png' width='50%'></img>
      </div>
      <SelectAllThatApply
        question="After observing this structure, select ALL the statements that are true about applying the Composite pattern here:"
        options={[
          'A. Developers and Designers are Leaf nodes (no children)',
          'B. Managers are Composite nodes (have children)',
          'C. The CEO is a Composite node (has children)',
          'D. All employees should share a common interface (e.g., Employee)',
          'E. Managers can only contain Developers, not other Managers',
          'F. You can call the same operation (e.g., getSalary()) on any employee'
        ]}
        // Correct answers are A, B, C, D, F which correspond to indices 0, 1, 2, 3, 5
        correctAnswerIndices={[0, 1, 2, 3, 5]}
        feedback="Correct! E is wrong because the power of the pattern is that a Composite (Manager) can contain any other Component, including other Composites (Managers)."
      />
    </div>
  </div>

  
);


export const TheoristsPerformance = () => (
  <div className="assessment-container">
    <div className="question-wrapper">
      <h5>Theorist Question 1 (Fill in the Blank)</h5>
      <FillInTheBlank
        parts={[
          '"In the Composite Design Pattern, the ', null, ' defines the common interface, the ', null, ' represents individual end objects, and the ', null, ' manages child components."'
        ]}
        correctAnswers={['Component', 'Leaf', 'Composite']}
        feedback="The correct roles are Component (the interface), Leaf (the simple element), and Composite (the container)."
      />
    </div>

    <div className="question-wrapper">
      <h5>Theorist Question 2 (Multiple Choice)</h5>
      <div className="scenario">
        <strong>Scenario:</strong> You are designing the UML class structure for a file system using the Composite pattern.
      </div>
      <MultipleChoiceQuestion
        question="In UML, why must both File and Folder inherit from FileSystemElement?"
        options={[
          'To allow both classes to share common operations like display() and getSize() through polymorphism.',
          'Because inheritance is required to avoid object duplication.',
          'To ensure all classes are instantiated only once.'
        ]}
        correctAnswerIndex={0}
        feedback="This shared interface enables uniform treatment of simple and composite objects through polymorphism."
      />
    </div>

    <div className="question-wrapper">
      <h5>Reflector Question 3 (Multiple Choice)</h5>
      <div className="scenario">
        <strong>Scenario:</strong> Consider these two possible designs for a graphics system:<br></br>
        <p><strong>A</strong></p><img src='/src/assets/theoristOptionA.png' width='50%'></img><br></br>
        <p><strong>B</strong></p><img src='/src/assets/theoristOptionB.png' width='50%'></img>
      </div>
      <MultipleChoiceQuestion
        question="i. From a theoretical standpoint, which design correctly implements the Composite pattern?"
        options={[
          'Design A',
          'Design B',
          'Both are equally valid',
          'Neither is correct'
        ]}
        correctAnswerIndex={0}
        feedback="Group references the abstract Shape interface, enabling polymorphism."
      />
      <MultipleChoiceQuestion
        question="ii. What OOP principle does Design B violate that Design A follows?"
        options={[
          'Encapsulation',
          'Polymorphism',
          'Inheritance',
          'Abstraction'
        ]}
        correctAnswerIndex={1}
        feedback="Design A uses the abstract interface Shape while Design B uses the concrete class Circle."
      />
      <MultipleChoiceQuestion
        question="iii. What structural capability does Design A have that Design B lacks?"
        options={[
          'Group can contain Circles',
          'Group can be created at runtime',
          'Group can contain other Groups',
          'Group can implement multiple operations'
        ]}
        correctAnswerIndex={2}
        feedback="Only Design A allows recursive composition because Group references Shape (which Group also is)."
      />
    </div>
  </div>
);
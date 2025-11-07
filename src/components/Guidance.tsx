import React, { useState } from 'react';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';

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
  );
};

const TheoristQuestions = [
  {
    question: "In a UML diagram, which symbol represents Composition (strong ownership), where the child's lifetime is tied to the parent?",
    options: ['◇ (Hollow Diamond)', '◆ (Solid Diamond)', '△ (Triangle Arrow)', '→ (Simple Arrow)'],
    correctAnswerIndex: 1,
    feedback: "The solid diamond (◆) signifies Composition, meaning the part cannot exist without the whole. The hollow diamond (◇) signifies Aggregation."
  },
  {
    question: "What is the primary role of the 'Component' in the Composite pattern?",
    options: [
      'To hold a list of child objects.',
      'To implement the final, concrete operation.',
      'To declare a common interface for all objects in the tree.',
      'To manage the memory of the Leaf objects.'
    ],
    correctAnswerIndex: 2,
    feedback: "The Component acts as a contract. It defines the set of operations (like getSize()) that both individual Leaves and container Composites must implement."
  },
  {
    question: "Which among the following best describes polymorphism?",
    options: ['It is the ability for a message/data to be processed in more than one form', 'It is the ability for a message/data to be processed in only 1 form', 'It is the ability for many messages/data to be processed in one way', 'It is the ability for undefined message/data to be processed in at least one way'],
    correctAnswerIndex: 0,
    feedback: "The word polymorphism indicates many-forms. So if a single entity takes more than one form, it is known as polymorphism."
  }
];

export const TheoristsGuidance = () => (
  <div className="multi-question-container">
    {TheoristQuestions.map((q, index) => (
      <MultipleChoiceQuestion
        key={index}
        question={q.question}
        options={q.options}
        correctAnswerIndex={q.correctAnswerIndex}
        feedback={q.feedback}
      />
    ))}
  </div>
);


const ReflectorQuestions = [
  {
    question: "You are reviewing code for a graphics editor. You notice that Circles, Squares, and Groups_of_Shapes all share a `draw()` method. What design concept does this shared interface primarily promote?",
    options: [
      'It ensures the code runs as fast as possible.',
      'It allows the client to treat individual and grouped shapes uniformly.',
      'It makes the code harder for new developers to understand.',
      'It forces every shape to have a color property.'
    ],
    correctAnswerIndex: 1,
    feedback: "The goal is uniformity. By sharing an interface, the client code that calls draw() doesn't need to know or care if it's dealing with a single shape or a complex group. This is the Composite design pattern at work!"
  },
  {
    question: "Consider a system for a restaurant menu. A MenuItem (like Fries) is a Leaf. A MenuCategory (like Appetizers) is a Composite. Why would it be a poor design choice to add a method like getIngredients() only to the MenuItem class?",
    options: [
      'Because MenuCategory should not know about ingredients.',
      'Because all operations should only exist on the Composite.',
      'Because it would make the MenuItem class too large.',
      'Because it violates the principle of uniformity; the client could no longer treat all components the same way.'
    ],
    correctAnswerIndex: 3,
    feedback: "Adding operations to only the Leaf breaks the pattern. The client loses the ability to treat all components uniformly and would need to start checking the type of an object before calling getIngredients(), reintroducing complexity."
  },
  {
    question: "When observing a new system, what is the clearest sign that the Composite pattern might be a beneficial addition?",
    options: [
      'The code uses too many classes.',
      'The client code is full of `if (item is Group)` or `instanceof` checks before performing an action.',
      'The system is running too slowly.',
      'The database schema is too complex.'
    ],
    correctAnswerIndex: 1,
    feedback: "That branching logic (`if/else` based on type) is the classic problem the Composite pattern solves. It indicates that the system is trying to handle individual and group objects differently, when it could be treating them uniformly."
  }
];


export const ReflectorsGuidance = () => (
  <div className="multi-question-container">
    {ReflectorQuestions.map((q, index) => (
      <MultipleChoiceQuestion
        key={index} 
        question={q.question}
        options={q.options}
        correctAnswerIndex={q.correctAnswerIndex}
        feedback={q.feedback}
      />
    ))}
  </div>
);


const PragmatistQuestions = [
  {
    question: "You are building the product categories feature for an e-commerce site. For performance, you decide that a Product can be listed in multiple Categories. What UML relationship and ownership model must you use?",
    options: [
      'Composition (◆), because a category owns its products.',
      'Aggregation (◇), because the products have a shared lifetime and should not be deleted when one category is removed.',
      'Inheritance (△), because a product is a type of category.',
      'Composition (◆), because it is always the safest option.'
    ],
    correctAnswerIndex: 1,
    feedback: "This is the classic use-case for Aggregation. Since a product can exist in multiple categories (and should not be deleted if one of those categories is), it has a shared, independent lifetime. Aggregation (◇) correctly models this weak 'has-a' relationship."
  },
  {
    question: "What is the most immediate and practical benefit of using the Composite pattern in a team project?",
    options: [
      'It guarantees the program will have no bugs.',
      'It makes the code run 50% faster.',
      'It reduces client-side complexity, making the code easier for other developers to use and extend.',
      'It automatically saves your data to a file.'
    ],
    correctAnswerIndex: 2,
    feedback: "The primary practical benefit is for the client developer. They don't have to write complex logic to handle different object types, which makes the system easier to work with, less prone to bugs, and faster to extend with new features."
  },
  {
    question: "You've implemented a file system using Composition (◆), where Folders own their children. What happens if the client code keeps a reference to a File object, and then the parent Folder is deleted?",
    options: [
      'The file will be automatically moved to the root directory.',
      'Nothing, the file will continue to exist safely.',
      'The clients reference now points to deleted memory (a dangling pointer), which will cause bugs or crashes if used.',
      'The program will ask the user for confirmation before deleting.'
    ],
    correctAnswerIndex: 2,
    feedback: "This is the key trade-off of Composition. The parent's destructor deletes the child, but it cannot update external references. The client code is now holding a 'stale' reference, and trying to use it can lead to undefined behavior or crashes. This is why clear documentation and API contracts are crucial."
  }
];

export const PragmatistsGuidance = () => (
  <div className="multi-question-container">
    {PragmatistQuestions.map((q, index) => (
      <MultipleChoiceQuestion
        key={index} 
        question={q.question}
        options={q.options}
        correctAnswerIndex={q.correctAnswerIndex}
        feedback={q.feedback}
      />
    ))}
  </div>
);

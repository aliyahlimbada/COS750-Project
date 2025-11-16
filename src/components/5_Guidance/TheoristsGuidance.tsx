import { MultiQuestionContainer } from "../MultiQuestionContainer";

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
  <div className="visual-container">
    <div className="feature-request-ticket">
      <MultiQuestionContainer TheoristQuestions={TheoristQuestions} />
    </div>
  </div>
);


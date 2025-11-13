import { MultipleChoiceQuestion } from "../MultipleChoiceQuestion";
import { MultiQuestionContainer } from "../MultiQuestionContainer";

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
  <div className="visual-container">
    <div className="feature-request-ticket">
      <MultiQuestionContainer TheoristQuestions={ReflectorQuestions} />
    </div>
  </div>
);


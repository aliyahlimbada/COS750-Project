import { MultipleChoiceQuestion } from "../MultipleChoiceQuestion";
import { MultiQuestionContainer } from "../MultiQuestionContainer";


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
  <div className="visual-container">
    <div className="feature-request-ticket">
      <MultiQuestionContainer TheoristQuestions={PragmatistQuestions} />
    </div>
  </div>
);


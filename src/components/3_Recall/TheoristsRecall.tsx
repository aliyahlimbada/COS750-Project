import RevealableAnswer from '../RevealableAnswer';
import '../../styles/app.scss';

export const TheoristsRecall = () => (
  <div className="visual-container">
    <div className="feature-request-ticket">
    <h3 className="visual-title">Let's revisit some foundational principles.</h3>
    <RevealableAnswer
      question={
       <p>What is the primary purpose of an <strong>abstract class</strong>?</p>
      }
      answer={
          <p><strong>Abstract classes</strong> define a common base with shared behaviour and abstract methods that must be implemented by the subclasses. It's used to enforce a consistent structure across related classes.</p>
      }
    />
    <RevealableAnswer
      question={
       <p>What is <strong>polymorphism</strong> and how does it let us treat objects uniformly?</p>
      }
      answer={
          <p><strong>Polymorphism</strong> is the ability of different classes to be treated as instances of the same superclass (or parent class). It lets us use one interface (for example, a method call) to work with different underlying object types uniformly.</p>
      }
    />
    <RevealableAnswer
      question={
       <p>Define <strong>recursion</strong>. In what scenarios is it most useful?</p>
      }
      answer={
          <p><strong>Recursion</strong> is when a function calls itself to solve a smaller version of the same problem. It’s most useful for tasks with repetitive subproblems, like tree traversal, factorials, or searching/sorting algorithms.</p>
      }
    />
    <RevealableAnswer
        question={
        <p>What is the difference between the <strong>aggregation</strong> and <strong>composition</strong> relationships?</p>
        }
        answer={
          <p><strong>Aggregation</strong> is a <strong>"has-a"</strong> relationship where the part can exist independently from the whole (for example, a school has teachers).<br></br> <strong>Composition</strong> is a <strong>"owns-a"</strong> relationship where the part cannot exist without the whole (for example, a house has rooms).</p>
        }
    />
     {/* <p className="puzzle-question">
        You should be all caught up on the basics of polymorphism and tree structures now!           
    </p> */}
  </div>
  </div>
);

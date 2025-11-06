import RevealableAnswer from './RevealableAnswer';

export const ActivistsRecall = () => (
  <div>
    <h4>Quick warm-up! Let's get the fingers moving.</h4>
    <RevealableAnswer
      question={
        <p>Imagine an array of shapes. All have a <code>draw()</code> method. Can you write a loop to call <code>draw()</code> on every shape?</p>
      }
      answer={
        <div className="code-prompt">
          <pre><code>
{`const shapes = [new Circle(), new Square()];
for (const shape of shapes) {
  shape.draw(); // This is polymorphism!
}`}
          </code></pre>
        </div>
      }
    />
    <RevealableAnswer
        question={<p>Draw a tree structure of one folder and two files in a root file, and then another file in the subfolder.</p>
        }
        answer={
            <img src="/src/assets/tree folder structure.png" width="50%" height="50%"></img>
        }
        />
    <RevealableAnswer
        question={
        <p>Consider the following scenarios and indicate whether <strong>aggregation</strong> or <strong>composition</strong> is used: <ol><li>A school consists of teachers.</li><li>A house is made up of rooms.</li></ol></p>
        }
        answer={
        <p><ol><li><strong>Aggregation:</strong> A school and a teacher can exist independently.</li><li><strong>Composition:</strong> A room cannot exist without a house.</li></ol></p>
        }
        />
  </div>
);

export const TheoristsRecall = () => (
  <div>
    <h4>Let's revisit some foundational principles.</h4>
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
  </div>
);

export const ReflectorsRecall = () => (
  <div>
    <h4>Let's take a moment to look back on your own experiences.</h4>
    <RevealableAnswer
      question={
        <p>Think about a past project involving a hierarchy (UI views, categories, documents). How did you manage "parent-child" relationships? What was it like to perform an operation on both individual items and their containers?</p>
      }
      answer={
        <p>Many developers start by writing separate logic and using `if/else` checks to handle containers versus individual items. Often, this leads to repeated code and becomes difficult to maintain as new types are added.</p>
      }
    />
    <RevealableAnswer 
     question={
        <p>Which programming concept would be beneficial in this scenario and why?</p>
     }
     answer={
        <p><strong>Polymorphism</strong> would be ideal in this scenario as it treats objects from the same superclass (or parent class) uniformly. </p>
     }
     />
     <RevealableAnswer
      question={
        <p>Think about a scenario where an <strong>aggregation</strong> relationship would be used, and a scenario where a <strong>composition</strong> relationship would be used.</p>
      }
      answer={
        <p><strong>Aggregation:</strong> A school has teachers. The school and the teacher can exist independently from one another. <br></br> <strong>Composition:</strong> A house contains rooms. Rooms cannot exist without being a part of the house and the house cannot exist without containing rooms.</p>
      }
      />
  </div>
);

export const PragmatistsRecall = () => (
  <div>
    <h4>Let's look at a common, messy problem that needs a better solution.</h4>
    <RevealableAnswer
      question={
        <div className="code-prompt">
          <pre><code>
{`function handleRender(elements) {
  for (const el of elements) {
    if (el.type === 'Image') {
      renderImage(el);
    } else if (el.type === 'TextBlock') {
      renderText(el);
    } // ...and so on
  }
}`}
          </code></pre>
          <p>What's the immediate problem here if we need to add a new element type, like `Video`?</p>
        </div>
      }
      answer={
        <p>The problem is that you must modify the central `handleRender` function every single time a new element is created which leads to hard-to-maintain systems.</p>
      }
    />
    <RevealableAnswer
    question={
        <p>How would we rewrite the code to allow for easier additions of new element types?</p>
    }
    answer={
        <p>We would use polymorphism to treat elements inheriting from the same superclass (or parent class) uniformly.</p>
    }
    />
    <RevealableAnswer
    question={
        <p>What are the 2 UML relationships shown and what do they mean? <img src="/src/assets/relationships.png" width="30%" height="30%"></img></p>
    }
    answer={
        <p>The open diamond is the <strong>aggregation</strong> relationship which is a "has-a" relationship. <br></br>The filled diamond is the <strong>composition</strong> relationship which is "owns-a" relationship.</p>
    }
    />
  </div>
);
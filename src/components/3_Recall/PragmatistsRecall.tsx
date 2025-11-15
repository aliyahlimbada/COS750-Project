import RevealableAnswer from '../RevealableAnswer';
import '../../styles/app.scss';;

export const PragmatistsRecall = () => (
  <div className="visual-container">
    <div className="feature-request-ticket">
    <h3 className="visual-title">Let's look at a common, messy problem that needs a better solution.</h3>
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
      <p className="puzzle-question">
          Notice how polymorphism is useful when working with tree like structures.
    </p>
      </div>
  </div>
);

import RevealableAnswer from '../RevealableAnswer';
import '../../styles/app.scss';

export const ActivistsRecall = () => (
  <div className="visual-container">
    <div className="feature-request-ticket">
    <h3 className="visual-title">Do you remember polymorphism and tree structures?</h3>

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
    </div>
);
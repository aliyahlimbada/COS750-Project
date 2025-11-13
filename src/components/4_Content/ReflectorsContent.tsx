import RevealableAnswer from "../RevealableAnswer";


export const ReflectorsContent = () => (
    <div className="visual-container">
    <div className="feature-request-ticket">
  <div className="content-container">
    <h4>Observing the Pattern in the Wild</h4>
    <p>The Composite pattern appears in many familiar systems. Observe the examples below and try to identify the role each part plays.</p>
    <div className="case-studies">
      <div className="study">
        <h5>GUI Toolkits</h5>
        <p>A window contains panels, which contain buttons and text fields.</p>
        <RevealableAnswer
          question={<p>What is the Component, Leaf, and Composite here?</p>}
          answer={
            <ul>
              <li><strong>Component:</strong> `Graphic` (anything that can be drawn)</li>
              <li><strong>Leaf:</strong> `Button`, `TextField`</li>
              <li><strong>Composite:</strong> `Panel`, `Window`</li>
            </ul>
          }
        />
      </div>
      <div className="study">
        <h5>Company Hierarchy</h5>
        <p>A company is made of departments, which are made of teams, which have individual employees.</p>
        <RevealableAnswer
          question={<p>What is the Component, Leaf, and Composite here?</p>}
          answer={
            <ul>
              <li><strong>Component:</strong> `PayableUnit` (anything that can report its salary costs)</li>
              <li><strong>Leaf:</strong> `Employee`</li>
              <li><strong>Composite:</strong> `Team`, `Department`</li>
            </ul>
          }
        />
      </div>
    </div>
  </div>
      </div>
  </div>
);

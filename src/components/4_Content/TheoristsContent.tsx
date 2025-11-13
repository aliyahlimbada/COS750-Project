

export const TheoristsContent = () => (
    <div className="visual-container">
    <div className="feature-request-ticket">
  <div className="content-container">
    <h4>Formal Definition & Structure</h4>
    <blockquote className="formal-definition">
      "The Composite pattern composes objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly."
      <cite>– Design Patterns: Elements of Reusable Object-Oriented Software</cite>
    </blockquote>

    <h4>The Three Core Elements</h4>
    <div className="conceptual-diagram uml-svg">
        <div className="box component">
            <strong>Component (Interface)</strong>
            <p>The contract that all parts of the tree must follow. Declares the common operations (e.g., `getSize()`).</p>
        </div>


      <svg className="uml-connector" width="350" height="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M 150 10 V 30 H 5 V 150" stroke="#555" strokeWidth="2" fill="none" />
        <path d="M 150 30 H 275 V 150" stroke="#555" strokeWidth="2" fill="none" />
        <polygon points="150,10 145,20 155,20" fill="#555" />
      </svg>


        <div className="leaves">
            <div className="box leaf">
                <strong>Leaf (e.g., File)</strong>
                <p>A basic building block. It has no children. It implements the Component's operations.</p>
            </div>

            <div className="composite-wrapper">
          <div className="box composite">
            <strong>Composite (e.g., Folder)</strong>
                <p>A container. It holds a collection of children (Leaves or other Composites) and implements the Component's operations, usually by delegating to its children.</p>
            </div>

          <svg className="aggregation-line" width="150" height="120">
            <polygon points="45,65 50,60 55,65 50,70" stroke="#555" strokeWidth="2" fill="white" />
            <path d="M 50 55 V 60 10 H " stroke="#555" strokeWidth="2" fill="none" />
          </svg>
        </div>


        </div>
    </div>
  </div>
  </div>
  </div>
);
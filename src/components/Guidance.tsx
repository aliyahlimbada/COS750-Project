import React, { useState } from 'react';

// A simple drag-and-drop sorting game
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

export const TheoristsGuidance = () => (
  <div className="guidance-container framework">
    <h3>Conceptual Framework & Mnemonics</h3>
    
    <div className="guidance-section">
      <h4>Mnemonic: The Three "C"s</h4>
      <ul>
        <li><strong>Component:</strong> The <strong>C</strong>ontract (The abstract interface).</li>
        <li><strong>Leaf:</strong> The basic <strong>C</strong>omponent (The individual object).</li>
        <li><strong>Composite:</strong> The <strong>C</strong>ontainer (The object that holds others).</li>
      </ul>
    </div>

    <div className="guidance-section">
      <h4>Distinguishing Part-Whole Relationships</h4>
      <p>The key difference between Aggregation and Composition lies in the strength of ownership and object lifetime.</p>
      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Aggregation (Shared)</th>
            <th>Composition (Owned)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Symbol</strong></td>
            <td>Hollow Diamond ◇</td>
            <td>Solid Diamond ◆</td>
          </tr>
          <tr>
            <td><strong>Lifetime</strong></td>
            <td>Children can outlive the parent.</td>
            <td>Children are destroyed with the parent.</td>
          </tr>
          <tr>
            <td><strong>Relationship</strong></td>
            <td>"Has-a" (Weak reference)</td>
            <td>"Is-part-of" (Strong ownership)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const ReflectorsGuidance = () => (
  <div className="guidance-container analogies">
    <h3>Thinking in Analogies</h3>

    <div className="guidance-section">
      <h4>Analogy: A Set of Russian Nesting Dolls</h4>
      <p>Think of the whole pattern as a set of nesting dolls. The outermost doll is a Composite. The innermost, solid doll is a Leaf. But what is the Component? It's the very idea of "doll-ness" itself—the fact that you can perform the same action (like weighing it or painting it) on any doll, whether it's a container or the final piece.</p>
    </div>

    <div className="guidance-section">
      <h4>Comparing Ownership: Two Management Styles</h4>
      <div className="comparison">
        <div className="side">
          <h5>Aggregation ◇ (The Consultant)</h5>
          <p>A manager (the Client) assembles a temporary team for a project. The team members (children) report to the manager, but they don't "belong" to them. When the project is over, the team disbands, but the members still exist and can be assigned to other projects.</p>
        </div>
        <div className="side">
          <h5>Composition ◆ (The Department Head)</h5>
          <p>A Department Head (the Composite) is responsible for their entire department. The employees (children) are part of that department. If the entire department is dissolved, the employees' roles within it are also eliminated.</p>
        </div>
      </div>
    </div>
  </div>
);

export const PragmatistsGuidance = () => (
  <div className="guidance-container cheatsheet">
    <h3>Developer's Cheatsheet: Using Composite</h3>

    <div className="guidance-section">
      <h4>Rule of Thumb: When should I use this pattern?</h4>
      <p>Use the Composite pattern when you hear the phrase: <strong>"I need to treat a group of things the same way I treat one of those things."</strong> Consider the following real-world applications:</p>
      <ul>
        <li>Calculating the total size of files and folders.</li>
        <li>Rendering a complex UI with nested panels and buttons.</li>
        <li>Finding the total cost of products and bundled "box sets".</li>
      </ul>
    </div>

    <div className="guidance-section">
      <h4>Decision Guide: Who should delete the children? (Ownership)</h4>
      <p>This is the most common bug-prone area. Follow this simple rule:</p>
      <div className="decision-flow">
        <span>Does the parent exclusively own its children? (e.g., A Document's Sections)</span>
        <div className="arrow-down">↓</div>
        <div className="choice yes"><strong>YES:</strong> Use <strong>Composition (Solid Diamond ◆)</strong>. The parent deletes the children. This is safer and prevents memory leaks. <strong>(Default choice)</strong></div>
        <div className="arrow-down">↓</div>
        <div className="choice no"><strong>NO:</strong> Use <strong>Aggregation (Hollow Diamond ◇)</strong>. The client/creator deletes the children. Use this if children must be shared or outlive their parent.</div>
      </div>
    </div>
  </div>
);
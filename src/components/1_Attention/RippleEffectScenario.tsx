import '../../styles/app.scss';

export const RippleEffectScenario = () => (
  <div className="visual-container">
    <div className="ripple-effect-scenario">
      <h4 className="scenario-heading">
        "A good design decision today can save countless hours tomorrow.
        Consider the downstream effects of how you choose to represent files and folders."
      </h4>

      <div className="scenario-section">
        <h4>Reflect on this System Design...</h4>
        <p>
          Imagine your team built a file manager where <code>File</code> and <code>Folder</code> 
          are treated as completely separate concepts everywhere in the code.
        </p>
      </div>

      <div className="scenario-diagram">
        <div className="box-scenario">File Operations</div>
        <div className="box-scenario">Folder Operations</div>
      </div>

      <div className="scenario-reflection">
        <strong>Consider the long-term consequences. Ponder these questions:</strong>
        <ul>
          <li>
            What happens when a new feature like "Search by name" is requested? 
            How many different search functions will you need to write and maintain?
          </li>
          <li>
            How would you implement a "move" operation that can drag a mix of selected files and folders into a new folder?
          </li>
          <li>
            As the system grows, what happens to code readability when 
            <code> if (item is Folder)</code> checks start appearing everywhere?
          </li>
        </ul>
      </div>
    </div>
  </div>
);

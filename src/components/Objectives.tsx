import '../styles/app.scss'

export const ActivistsObjectives = () => (
    <div className='visual-container'>
        <h4>Description</h4>
        <p>We need to build a properties panel for our new file explorer UI. This panel should display the total size of whatever the user has selected.</p>
        <h4>Acceptance Criteria:</h4>
        <ul>
            <li>When a user selects a single file, the panel must show that file's size.</li>
            <li>When a user selects a single folder, the panel must show the combined size of all files and sub-folders within it.</li>
            <li>When a user selects multiple items (both files and folders), the panel must show the grand total size of everything selected.</li>
        </ul>
    </div>

);

export const TheoristObjectives = () => (
    <div className='visual-container'>
        <h4>This module will establish a complete conceptual framework. You will understand:</h4>
          <ul>
            <li>The <b>formal definition</b> and structure of the Composite design pattern.</li>
            <li>The distinct roles of the <b>Component, Leaf, and Composite</b> elements.</li>
            <li>The conceptual difference between <b>Aggregation and Composition</b> in UML and their impact on object lifetime.</li>
          </ul>
    </div>
);

export const ReflectorObjectives = () => (
    <div className='visual-container'>
        <h4>This section will provide opportunities for analysis. We will guide you to:</h4>
          <ul>
            <li><b>Identify</b> the tell-tale signs of a system that would benefit from the Composite pattern.</li>
            <li><b>Observe</b> how a single, shared interface simplifies complex operations.</li>
            <li><b>Consider</b> when it is more appropriate to use the <b>aggregation</b> or the <b>composition</b> relationships.</li>
          </ul>
    </div>
);

export const PragmatistObjectives = () => (
    <div className='visual-container'>
        <h4>Let's get this problem solved. You will learn the practical skills needed to:</h4>
          <ul>
            <li><b>Apply</b> the Composite pattern to solve the feature request for calculating selection sizes.</li>
            <li><b>Use</b> this pattern to handle common hierarchical data, like UI trees, product categories, or company structures.</li>
            <li><b>Choose</b> the correct ownership model to prevent common bugs like memory leaks.</li>
            <li><b>Write</b> cleaner, more maintainable code that is easier for your team to extend later.</li>
          </ul>
    </div>
);


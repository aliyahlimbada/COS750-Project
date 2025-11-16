import '../../styles/app.scss';

export const PragmatistObjectives = () => (
  <div className="visual-container pragmatist-objectives">
     <div className="feature-request-ticket">
          <h2 className="visual-title">Pragmatist Learning Objectives</h2>
            <div className="ticket-body">
                <h4>Let's get this problem solved. You will learn the practical skills needed to:</h4>
                <ul>
                    <li><b>Apply</b> the Composite pattern to solve the feature request for calculating selection sizes.</li>
                    <li><b>Use</b> this pattern to handle common hierarchical data, like UI trees, product categories, or company structures.</li>
                    <li><b>Choose</b> the correct ownership model to prevent bugs like memory leaks.</li>
                    <li><b>Write</b> cleaner, more maintainable code that your team can extend easily.</li>
                </ul>
                <p className="puzzle-question">
                You will learn how to apply the Composite pattern to solve practical problems involving part-whole hierarchies, like file systems or GUI components.
                </p>
            </div>
     </div>
  </div>
);

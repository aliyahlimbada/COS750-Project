import '../../styles/app.scss';

export const ReflectorObjectives = () => (
  <div className="visual-container reflector-objectives">
        <div className="feature-request-ticket">
            <h2 className="visual-title">Reflector Learning Objectives</h2>
            <div className="ticket-body">
            <h4>This section will provide opportunities for analysis. We will guide you to:</h4>
            <ul>
                <li><b>Identify</b> the tell-tale signs of a system that would benefit from the Composite pattern.</li>
                <li><b>Observe</b> how a single, shared interface simplifies complex operations.</li>
                <li><b>Consider</b> when it is more appropriate to use <b>aggregation</b> or <b>composition</b> relationships.</li>
            </ul>
            <p className="puzzle-question">
            This lesson will guide you in observing and analysing how the Composite pattern simplifies client code by creating a uniform interface for individual objects and collections.
            </p>
            </div>
        </div>
  </div>
);

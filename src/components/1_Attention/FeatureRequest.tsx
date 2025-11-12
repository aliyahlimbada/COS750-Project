import '../../styles/app.scss';

export const FeatureRequest = () => (
    <div className='visual-container'>
           <div className="feature-request-ticket">
        <div className="ticket-body">
            <h4>Description</h4>
            <p>We need to build a properties panel for our new file explorer UI. This panel should display the total size of whatever the user has selected.</p>
            <h4>Acceptance Criteria:</h4>
            <ul>
                <li>When a user selects a single file, the panel must show that file's size.</li>
                <li>When a user selects a single folder, the panel must show the combined size of all files and sub-folders within it.</li>
                <li>When a user selects multiple items (both files and folders), the panel must show the grand total size of everything selected.</li>
            </ul>
        </div>
    </div>
    </div>
 
);
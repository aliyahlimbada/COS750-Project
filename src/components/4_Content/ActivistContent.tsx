import { useState, useEffect } from 'react';

type AnimationPhase = 'visible' | 'fading-out' | 'hidden';

export const ActivistsContent = () => {
  const [step, setStep] = useState(0);
  const [connectorPhase, setConnectorPhase] = useState<AnimationPhase>('hidden');

  const FADE_DURATION = 300; 

  useEffect(() => {
    if (connectorPhase === 'fading-out') {
      const timer = setTimeout(() => {
        setStep(3);
        setConnectorPhase('visible');
      }, FADE_DURATION);

      return () => clearTimeout(timer);
    }
  }, [connectorPhase]);

  const handleNextStep = (nextStep: number) => {
    if (step === 2 && nextStep === 3) {
      setConnectorPhase('fading-out');
    } else {
      setStep(nextStep);
      if (nextStep === 2) {
        setConnectorPhase('visible');
      }
    }
  };

  return (
     <div className="visual-container">
    <div className="feature-request-ticket">
    <div className="content-container activist-builder">
      <h4>Let's Build the Composite Pattern!</h4>
      <div className="builder-buttons">
        <button onClick={() => handleNextStep(1)} disabled={step >= 1}>1. Define the Contract</button>
        <button onClick={() => handleNextStep(2)} disabled={step < 1 || step >= 2}>2. Create the Leaf</button>
        <button onClick={() => handleNextStep(3)} disabled={step < 2 || step >= 3}>3. Create the Container</button>
      </div>

      <div className="conceptual-diagram uml-svg">
        {step >= 1 && (
          <div className="box component fade-in">
            <strong>Component (Interface)</strong>
            <p>First, we need a common interface for everything!</p>
          </div>
        )}

        {step >= 2 && (
          <div 
            className={`connector-container ${
              connectorPhase === 'visible' ? 'fade-in' : ''
            } ${
              connectorPhase === 'fading-out' ? 'fade-out' : ''
            }`}
          >
            {step === 2 && (
              <svg className="inheritance-connector" width="350" height="60">
                <polygon points="150,0 145,10 155,10" fill="#555" />
                <path d="M 150 10 V 70" stroke="#555" strokeWidth="2" fill="none" />
              </svg>
            )}
            {step === 3 && (
              <svg className="inheritance-connector" width="350" height="70">
                <polygon points="150,0 145,10 155,10" fill="#555" />
                <path d="M 150 10 V 40 H 50 V 100" stroke="#555" strokeWidth="2" fill="none" />
                <path d="M 150 40 H 250 V 100" stroke="#555" strokeWidth="2" fill="none" />
              </svg>
              
            )}
          </div>
        )}
        
        <div className="leaves">
          {step >= 2 ? (
            <div className={`box leaf ${step === 2 ? 'fade-in' : ''}`}>
              <strong>Leaf (e.g., File)</strong>
              <p>These are the individual objects.</p>
            </div>
          ) : (
            <div className="box-placeholder"></div>
          )}

          {step >= 3 ? (
            <div className="composite-wrapper fade-in">
              <div className="box composite">
                <strong>Composite (e.g., Folder)</strong>
                <p>This holds other objects!</p>
              </div>
              <svg className="aggregation-line" width="100" height="400">
                <polygon points="0,65 5,60 10,65 5,70" stroke="#555" strokeWidth="2" fill="white" />
                <path d="M 5 55 V 60 0 H " stroke="#555" strokeWidth="2" fill="none" />
               </svg>
            </div>
          ) : (
            <div className="box-placeholder"></div>
          )}
        </div>
      </div>
    </div>
      </div>
        </div>
  );
};

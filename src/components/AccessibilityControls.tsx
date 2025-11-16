import { useAccessibility } from './AccessibilityContext';

export const AccessibilityControls = () => {
  // Get the current size and the function to change it from our global context
  const { textSize, setTextSize } = useAccessibility();

  return (
    <div className="accessibility-controls">
      <button 
        className={textSize === 'normal' ? 'active' : ''}
        onClick={() => setTextSize('normal')}
        title="Set font size to normal"
      >
        A
      </button>
      <button 
        className={textSize === 'large' ? 'active' : ''}
        onClick={() => setTextSize('large')}
        title="Set font size to large"
      >
        A+
      </button>
      <button 
        className={textSize === 'xlarge' ? 'active' : ''}
        onClick={() => setTextSize('xlarge')}
        title="Set font size to extra large"
      >
        A++
      </button>
    </div>
  );
};
import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';

// Define the shape of our context's data
interface AccessibilityContextType {
  textSize: 'normal' | 'large' | 'xlarge';
  setTextSize: (size: 'normal' | 'large' | 'xlarge') => void;
}

// Create the context
const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

// Create the Provider component. This component will "provide" the state to its children.
export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // This is the core logic for text size.
  // When `textSize` changes, this effect runs and adds a class to the main <html> tag.
  useEffect(() => {
    document.documentElement.className = ''; // First, clear any old size classes
    document.documentElement.classList.add(`text-${textSize}`);
  }, [textSize]);
  
  // The value that will be shared with all components inside the provider
  const value = { textSize, setTextSize };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Create a custom hook. This is a shortcut to make using our context easier.
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
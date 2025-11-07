import { useState, useEffect } from 'react';
import RevealableAnswer from './RevealableAnswer';

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
  );
};


export const TheoristsContent = () => (
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
);

export const ReflectorsContent = () => (
  <div className="content-container">
    <h4>Observing the Pattern in the Wild</h4>
    <p>The Composite pattern appears in many familiar systems. Observe the examples below and try to identify the role each part plays.</p>
    <div className="case-studies">
      <div className="study">
        <h5>GUI Toolkits</h5>
        <p>A window contains panels, which contain buttons and text fields.</p>
        <RevealableAnswer
          question={<p>What is the Component, Leaf, and Composite here?</p>}
          answer={
            <ul>
              <li><strong>Component:</strong> `Graphic` (anything that can be drawn)</li>
              <li><strong>Leaf:</strong> `Button`, `TextField`</li>
              <li><strong>Composite:</strong> `Panel`, `Window`</li>
            </ul>
          }
        />
      </div>
      <div className="study">
        <h5>Company Hierarchy</h5>
        <p>A company is made of departments, which are made of teams, which have individual employees.</p>
        <RevealableAnswer
          question={<p>What is the Component, Leaf, and Composite here?</p>}
          answer={
            <ul>
              <li><strong>Component:</strong> `PayableUnit` (anything that can report its salary costs)</li>
              <li><strong>Leaf:</strong> `Employee`</li>
              <li><strong>Composite:</strong> `Team`, `Department`</li>
            </ul>
          }
        />
      </div>
    </div>
  </div>
);

const codeImplementation = `
#include <iostream>
#include <vector>
#include <memory>

// 1. The Component: Shared interface
class IFileSystemComponent {
public:
    virtual ~IFileSystemComponent() = default;
    virtual int getSize() const = 0;
};

// 2. The Leaf: Basic object
class FileLeaf : public IFileSystemComponent {
    std::string name;
    int size;
public:
    FileLeaf(const std::string& n, int s) : name(n), size(s) {}

    int getSize() const override {
        return size; // A file just returns its own size
    }
};

// 3. The Composite: The container
class FolderComposite : public IFileSystemComponent {
    std::string name;
    std::vector<std::shared_ptr<IFileSystemComponent>> children;
public:
    FolderComposite(const std::string& n) : name(n) {}

    void add(const std::shared_ptr<IFileSystemComponent>& component) {
        children.push_back(component);
    }

    int getSize() const override {
        int total = 0;
        for (const auto& child : children)
            total += child->getSize(); // Recursive delegation
        return total;
    }
};

// Example usage
int main() {
    auto file1 = std::make_shared<FileLeaf>("file1.txt", 120);
    auto file2 = std::make_shared<FileLeaf>("file2.txt", 300);
    auto folder = std::make_shared<FolderComposite>("Documents");

    folder->add(file1);
    folder->add(file2);

    std::cout << "Total folder size: " << folder->getSize() << " KB\n";
}

`;

export const PragmatistsContent = () => (
  <div className="content-container">
    <h4>The Practical Code Solution</h4>
    <p>Let's solve the feature request from earlier. Here is an implementation in C++. The comments explain the role of each part.</p>
    <div className="code-prompt">
      <pre><code>{codeImplementation.trim()}</code></pre>
    </div>
  </div>
);
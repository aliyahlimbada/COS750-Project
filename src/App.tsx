import { useState, type JSX } from "react";
import Page from "./components/page";
import LearningStyleSelector, { type LearningStyle } from "./components/LearningStyleSelector";
import './styles/app.scss';

import { 
  InteractiveFileSystem, 
  UniformityPuzzle, 
  RippleEffectScenario, 
  FeatureRequest 
} from './components/visuals';




type ContentPiece = {
  text: string;
  visual?: JSX.Element; 
};

type PageContent = {
  [key in LearningStyle]: ContentPiece;
};

type PagesData = {
  [key: number]: {
    title: string;
    content: PageContent;
  };
};

// for the pages, add the others (4-8/9)
const pagesData: PagesData = {
  1: {
    title: "Chapter 1: The File System Challenge",
    content: {
      Activist: { 
        text: "Your mission: Calculate the total size of the 'root' folder. The total size of a folder is the sum of everything inside it.", 
        visual: <InteractiveFileSystem /> 
      },
      Theorist: { 
        text: "An object is either a single unit or a collection of units. How can we write code that doesn't care which it is?", 
        visual: <UniformityPuzzle /> 
      },
      Reflector: { 
        text: "A good design decision today can save countless hours tomorrow. Consider the downstream effects of how you choose to represent files and folders.", 
        visual: <RippleEffectScenario /> 
      },
      Pragmatist: { 
        text: "A user needs to see the total size of their selection. This feature must work flawlessly whether one file, one folder, or a mix of both are selected. Consider how you would build the following system.", 
        visual: <FeatureRequest /> 
      }
    }
  },

  2: {
    title: "Chapter 2: Your Learning Goals",
    content: {
      Activist: { text: "By the end of this, you will be able to build a basic tree structure and add operations that work on every element in it." },
      Theorist: { text: "You will understand the formal definition of the Composite pattern, its three core components (Component, Leaf, Composite), and how they relate to principles like polymorphism." },
      Reflector: { text: "This lesson will guide you in observing and analyzing how the Composite pattern simplifies client code by creating a uniform interface for individual objects and collections." },
      Pragmatist: { text: "You will learn how to apply the Composite pattern to solve practical problems involving part-whole hierarchies, like file systems or GUI components." }
    }
  },
  3: {
    title: "Chapter 3: What Do You Already Know?",
    content: {
      Activist: { text: "Quick quiz! What is a 'tree data structure'? Can you draw a simple one representing a folder with two files inside?" },
      Theorist: { text: "Let's connect some dots. How does the concept of an 'interface' in object-oriented programming allow different classes to be treated similarly?" },
      Reflector: { text: "Think back to a time you had to write code that handled a list of items, where some items were simple and others were groups. How did you manage that complexity?" },
      Pragmatist: { text: "Remember working with file paths or DOM elements? You've already dealt with hierarchical data. We're just going to put a formal structure to it." }
    }
  },
};

function App() {
  const [page, setPage] = useState(1);
  const [learningStyle, setLearningStyle] = useState<LearningStyle>('Pragmatist');

  const totalPages = Object.keys(pagesData).length;

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  const currentPageData = pagesData[page]; 
  
  const currentContent = currentPageData.content[learningStyle];

  return (
    <div className="app-container">
      <div className="page-container">
        <div className={`arrow left ${page === 1 ? "disabled" : ""}`} onClick={prevPage}>←</div>
        <LearningStyleSelector 
        selectedStyle={learningStyle} 
        onStyleChange={setLearningStyle} 
        />
        <Page title={currentPageData.title}>
            <div>
                <p>{currentContent.text}</p>
                {currentContent.visual && (
                    <div className="visual-aid-container">
                        {currentContent.visual}
                    </div>
                )}
            </div>
        </Page>
        <h2 className="page-number">Page {page} of {totalPages}</h2>
        <div className={`arrow right ${page === totalPages ? "disabled" : ""}`} onClick={nextPage}>→</div>
      </div>
    </div>
  );
}

export default App;
import { useState, type JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LearningStyleSelector, { type LearningStyle } from "./components/LearningStyleSelector";
import { InteractiveFileSystem } from "./components/InteractiveFileSystem";
import { UniformityPuzzle } from "./components/UniformityPuzzle";
import { RippleEffectScenario } from "./components/RippleEffectScenario";
import { FeatureRequest } from "./components/FeatureRequest";
import ProgressBar from "./components/ProgressBar";
import { ActivistsObjectives, PragmatistObjectives, ReflectorObjectives, TheoristObjectives } from "./components/Objectives";
import { ActivistsRecall, PragmatistsRecall, ReflectorsRecall, TheoristsRecall } from "./components/Recall";
import './styles/app.scss';

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
    title: "Chapter 2: Your Learning Objectives",
    content: {
      Activist: { 
        text: "By the end of this, you will be able to build a basic tree structure and add operations that work on every element in it.",
        visual: <ActivistsObjectives />
      },
      Theorist: { 
        text: "You will understand the formal definition of the Composite pattern, its three core components (Component, Leaf, Composite), and how they relate to principles like polymorphism.",
        visual: <TheoristObjectives />
      },
      Reflector: { 
        text: "This lesson will guide you in observing and analysing how the Composite pattern simplifies client code by creating a uniform interface for individual objects and collections.",
        visual: <ReflectorObjectives />
      },
      Pragmatist: { 
        text: "You will learn how to apply the Composite pattern to solve practical problems involving part-whole hierarchies, like file systems or GUI components.",
        visual: <PragmatistObjectives />
      }
    }
  },
  3: {
    title: "Chapter 3: What Do You Already Know?",
    content: {
      Activist: { 
        text: "Great! Now you remember polymorphism and tree structures!",
        visual: <ActivistsRecall />
      },
      Theorist: { 
        text: "You're all caught up on the basics of polymorphism and tree structures!",
        visual: <TheoristsRecall />
      },
      Reflector: { 
        text: "Think about your past experiences where polymorphism and tree like structures would have been beneficial.",
        visual: <ReflectorsRecall />
      },
      Pragmatist: { 
        text: "Notice how polymorphism is useful when working with tree like structures.",
        visual: <PragmatistsRecall />
      }
    }
  },
   4: {
  title: "Chapter 4: Presenting the Composite Pattern",
  content: {
    Activist: { 
      text: "Let’s dive in! Start by coding a simple example — create a Folder class that can hold Files or other Folders. Run it and see how one command like 'display()' works for both. Notice how everything behaves the same, whether it’s a single file or a group."
    },
    Theorist: { 
      text: "The Composite Pattern allows individual objects and groups of objects to be treated uniformly. It includes three parts: Component (defines the interface), Leaf (individual item), and Composite (collection of items). This supports polymorphism and recursive design."
    },
    Reflector: { 
      text: "Observe how the Composite Pattern simplifies client code. Before, you might have needed separate logic for single items and groups. Now, a common interface means you can loop over everything the same way. Think about why this reduces complexity."
    },
    Pragmatist: { 
      text: "Here’s how you’d use it in real life — for example, a menu system where each menu can hold items or submenus. The same logic handles both cases, making updates and rendering much easier. This pattern directly applies to many UI or file management systems."
    }
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
        <div className={`arrow left ${page === 1 ? "disabled" : ""}`} onClick={prevPage}>
          <ChevronLeft size={60} /> 
        </div>

        <h1 className="page-title">{currentPageData.title}</h1>

        <LearningStyleSelector
        selectedStyle={learningStyle} 
        onStyleChange={setLearningStyle} 
        />
      
      <div className='page-content'>
          {currentContent.visual}
          
           {page !== 1 && currentContent.text && (
          <div className="text-block">
            {currentContent.text}
          </div>
          )}
      </div>
       <ProgressBar progress={(page / totalPages) * 100} />

        <div className={`arrow right ${page === totalPages ? "disabled" : ""}`} onClick={nextPage}>
          <ChevronRight size={60} />
        </div>

      </div>
    </div>
  );
}

export default App;
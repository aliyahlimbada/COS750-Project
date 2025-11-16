import { useState, type JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LearningStyleSelector, { type LearningStyle } from "./components/LearningStyleSelector";
import ProgressBar from "./components/ProgressBar";
import './styles/app.scss';

// 1. Attention
import { InteractiveFileSystem } from "./components/1_Attention/InteractiveFileSystem";
import { UniformityPuzzle } from "./components/1_Attention/UniformityPuzzle";
import { RippleEffectScenario } from "./components/1_Attention/RippleEffectScenario";
import { FeatureRequest } from "./components/1_Attention/FeatureRequest";

// 2. Objectives
import { ActivistsObjectives } from "./components/2_Objectives/ActivistObjectives";
import { TheoristObjectives } from "./components/2_Objectives/TheoristObjectives";
import { ReflectorObjectives } from "./components/2_Objectives/ReflectorObjectives";
import { PragmatistObjectives } from "./components/2_Objectives/PragmatistObjectives";

// 3. Recall
import { ActivistsRecall } from "./components/3_Recall/ActivistsRecall";
import { PragmatistsRecall } from "./components/3_Recall/PragmatistsRecall";
import { ReflectorsRecall } from "./components/3_Recall/ReflectorsRecall";
import { TheoristsRecall } from "./components/3_Recall/TheoristsRecall";

// 4. Content
import { ActivistsContent } from "./components/4_Content/ActivistContent";
import { PragmatistsContent } from "./components/4_Content/PragmatistsContent";
import { ReflectorsContent } from "./components/4_Content/ReflectorsContent";
import { TheoristsContent } from "./components/4_Content/TheoristsContent";

// 5. Guidance
import { ActivistsGuidance } from "./components/5_Guidance/ActivistsGuidance";
import { PragmatistsGuidance } from "./components/5_Guidance/PragmatistsGuidance";
import { ReflectorsGuidance } from "./components/5_Guidance/ReflectorsGuidance";
import { TheoristsGuidance } from "./components/5_Guidance/TheoristsGuidance";

// 6. Performance
import { ReflectorsPerformance } from "./components/6_Performance/ReflectorsPerformance";
import { TheoristsPerformance } from "./components/6_Performance/TheoristsPerformance";

//8. Assessment
import { Assessment } from "./components/8_Assessment/Assessment";
import { ActivistPerformance } from "./components/6_Performance/ActivistPerformance";
import { Conclusion } from "./components/9_Conclusion/Conclusion";

type ContentPiece = {
  text?: string;
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

const pagesData: PagesData = {
  1: {
    title: "Chapter 1: The File System Challenge",
    content: {
      Activist: { 
        visual: <InteractiveFileSystem /> 
      },
      Theorist: { 
        visual: <UniformityPuzzle /> 
      },
      Reflector: { 
        visual: <RippleEffectScenario /> 
      },
      Pragmatist: { 
        visual: <FeatureRequest /> 
      }
    }
  },

  2: {
    title: "Chapter 2: Your Learning Objectives",
    content: {
      Activist: { 
        visual: <ActivistsObjectives />
      },
      Theorist: { 
        visual: <TheoristObjectives />
      },
      Reflector: { 
        visual: <ReflectorObjectives />
      },
      Pragmatist: { 
        visual: <PragmatistObjectives />
      }
    }
  },
  3: {
    title: "Chapter 3: What Do You Already Know?",
    content: {
      Activist: { 
        visual: <ActivistsRecall />
      },
      Theorist: { 
        visual: <TheoristsRecall />
      },
      Reflector: { 
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
      text: "Now, let’s dive in! Code our simple file management example — create a Folder class that can hold Files or other Folders. See how one command like 'display()' works for both. Notice how everything behaves the same, whether it’s a single file or a group.",
      visual: <ActivistsContent />
    },
    Theorist: { 
      text: "",
      visual: <TheoristsContent />
    },
    Reflector: { 
      text: "Observe how the Composite Pattern simplifies client code. Before, you might have needed separate logic for single items and groups. Now, a common interface means you can loop over everything the same way. Think about why this reduces complexity.",
      visual: <ReflectorsContent />
    },
    Pragmatist: { 
      text: "Observe how the Composite Pattern simplifies client code. Before, you might have needed separate logic for single items and groups. Now, a common interface means you can loop over everything the same way. Think about why this reduces complexity.",
      visual: <PragmatistsContent />
    }
  }
},
5: {
    title: "Chapter 5: Making It Stick",
    content: {
      Activist: { 
        text: "",
        visual: <ActivistsGuidance />
      },
      Theorist: { 
        text: "",
        visual: <TheoristsGuidance />
      },
      Reflector: { 
        text: "",
        visual: <ReflectorsGuidance />
      },
      Pragmatist: { 
        text: "",
        visual: <PragmatistsGuidance />
      }
    }
  },

  6: {
    title: "Chapter 6: Put It Into Practice",
    content: {
      Activist: { 
        text: "Coming soon...",
        visual: <ActivistPerformance />
      },
      Theorist: { 
        text: "",
        visual: <TheoristsPerformance />
      },
      Reflector: { 
        text: "",
        visual: <ReflectorsPerformance />
      },
      Pragmatist: { 
        text: "Coming soon...",
        visual: <ActivistPerformance />
      }
    }
  },

  7: {
    title: "Chapter 7: Final Challenge - The Pizza Builder",
    content: {
      Activist: { text: "", visual: <Assessment/> }, // Placeholder
      Theorist: { text: "", visual: <Assessment />},
      Reflector: { text: "", visual: <Assessment /> },
      Pragmatist: { text: "", visual: <Assessment/> } // Placeholder
    }
  },

  8: {
    title: "Conclusion",
    content: {
      Activist:   { text: "Congratulations, you've completed the challenge! 🎉", visual: < Conclusion /> },
      Theorist:   { text: "Congratulations, you've completed the challenge! 🎉", visual: < Conclusion /> },
      Reflector:  { text: "Congratulations, you've completed the challenge! 🎉", visual: < Conclusion /> },
      Pragmatist: { text: "Congratulations, you've completed the challenge! 🎉", visual: < Conclusion /> }
    }
  }

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
import React, { useState, useMemo } from 'react';
import './visuals.scss'; // move into the actual styles folder please and thanks 

// --- Data for the Interactive File System ---
const fileSystemData = {
  name: 'MyDocuments',
  isFolder: true,
  children: [
    { name: '📄 report.docx', size: 120 },
    { name: '🖼️ graph.png', size: 345 },
    {
      name: '📁 documents',
      isFolder: true,
      children: [
        { name: '📄 CV.pdf', size: 95 },
        { name: '📄 cover_letter.docx', size: 50 },
      ],
    },
    {
      name: '📁 music',
      isFolder: true,
      children: [
        {
            name: '📁 billie eilish',
            isFolder: true,
            children: [
                { name: '🎵 WILDFLOWER.mp3', size: 3500 },
                { name: '🎵 ocean eyes.mp3', size: 4200 },
            ]
        },
        { name: '🎵 drivers license.mp3', size: 5000 },
      ],
    },
  ],
};

type FileSystemNodeData = {
  name: string;
  size?: number;
  isFolder?: boolean;
  children?: FileSystemNodeData[];
};


// ====================================================================
// Component #1: InteractiveFileSystem (for the Activist)
// ====================================================================

const FileSystemNode: React.FC<{ node: FileSystemNodeData; depth?: number }> = ({ node, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(depth < 2); // Auto-expand first few levels

  const totalSize = useMemo(() => {
    if (!node.isFolder) {
      return node.size || 0;
    }
    const calculateSize = (currentNode: FileSystemNodeData): number => {
      if (!currentNode.isFolder) {
        return currentNode.size || 0;
      }
      return currentNode.children?.reduce((sum, child) => sum + calculateSize(child), 0) || 0;
    };
    return calculateSize(node);
  }, [node]);

  const handleToggle = () => {
    if (node.isFolder) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div style={{ marginLeft: `${depth * 20}px` }}>
      <div className={`node ${node.isFolder ? 'folder' : 'file'}`} onClick={handleToggle}>
        <span className="node-name">{node.name}</span>
        <span className="node-size">{(totalSize / 1024).toFixed(2)} KB</span>
      </div>
      {isOpen && node.children && (
        <div className="children">
          {node.children.map((child, index) => (
            <FileSystemNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const InteractiveFileSystem = () => (
    <div className="interactive-file-system">
        <h4>Click on folders to expand/collapse!</h4>
        <FileSystemNode node={fileSystemData} />
    </div>
);


// ====================================================================
// Component #2: ConceptualDiagram (for the Theorist)
// ====================================================================

export const UniformityPuzzle = () => (
    <div className="uniformity-puzzle">
        <h4>The Logical Challenge</h4>
        <p>A file has a `size`. A folder has a list of `children` (files and other folders). These seem like two different things. Consider these functions:</p>
        <div className="code-blocks-puzzle">
            <pre><code>function getFileSize(file: File): number</code></pre>
            <pre><code>function getFolderSize(folder: Folder): number</code></pre>
        </div>
        <p className="puzzle-question">
            <strong>Your task:</strong> How could you design a single, elegant function, <code>getSize(item: ???)</code>, that works on both a file and a folder without needing to check its type? What fundamental quality must `File` and `Folder` share?
        </p>
    </div>
);


// ====================================================================
// Component #3: CodeComparison (for the Reflector)
// ====================================================================

export const RippleEffectScenario = () => (
    <div className="ripple-effect-scenario">
        <h4>Reflect on this System Design...</h4>
        <p>Imagine your team built a file manager where `File` and `Folder` are treated as completely separate concepts everywhere in the code.</p>
        <div className="scenario-diagram">
            <div className="box-scenario">File Operations</div>
            <div className="box-scenario">Folder Operations</div>
        </div>
        <strong>Consider the long-term consequences. Ponder these questions:</strong>
        <ul>
            <li>What happens when a new feature like "Search by name" is requested? How many different search functions will you need to write and maintain?</li>
            <li>How would you implement a "move" operation that can drag a mix of selected files and folders into a new folder?</li>
            <li>As the system grows, what happens to code readability when `if (item is Folder)` checks start appearing everywhere?</li>
        </ul>
    </div>
);

// ====================================================================
// Component #4: FileExplorerGif (for the Pragmatist)
// ====================================================================

export const FeatureRequest = () => (
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
);
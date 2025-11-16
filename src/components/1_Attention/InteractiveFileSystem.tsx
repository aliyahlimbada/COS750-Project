
import React, { useState, useMemo } from 'react';
import '../../styles/app.scss';

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
  <div className="visual-container">
    
    <div className="interactive-file-system">

    
    <div className="visual-title">
      <h2>Your mission:</h2>
      <p>
        Calculate the total size of the <strong>'root'</strong> folder.
      </p>
       <p>
        The total size of a folder is the sum of everything inside it. The total size of a folder is the sum of everything inside it. 
      </p>
    </div>

    <div className='interactive-folders'>
      <h4>Click on folders to expand or collapse</h4>
      <FileSystemNode node={fileSystemData} />
    </div>
  </div>
  </div>
//   add something to fill the space i.e click here to view the answer
);
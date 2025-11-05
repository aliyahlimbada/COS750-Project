import '../styles/app.scss'

export const UniformityPuzzle = () => (
  <div className="visual-container">
    <div className="uniformity-puzzle">
      <h4 className="puzzle-heading">
        An object is either a single unit or a collection of units.
        How can we write code that doesn't care which it is?
      </h4>

      <div className="puzzle-section">
        <h4>The Logical Challenge</h4>
        <p>A file has a <code>size</code>. </p>
        <p>A folder has a list of <code>children</code> (files and other folders). </p>
        <p> These seem like two different things. Consider these functions: </p>
      </div>

      <div className="code-blocks-puzzle">
        <pre><code>function getFileSize(file: File): number</code></pre>
        <pre><code>function getFolderSize(folder: Folder): number</code></pre>
      </div>

      <p className="puzzle-question">
        <p><strong>Your task:</strong></p>
        <p></p>How could you design a single, elegant function, 
        <code> getSize(item: ???)</code>, that works on both a file and a folder 
        without needing to check its type? 
        <p>What fundamental quality must <code>File</code> and <code>Folder</code> share?</p>
      </p>
      
    </div>
  </div>
);

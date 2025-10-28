import { useState } from "react";
import Page from "./components/page";
import './styles/app.scss';

function App() {
  const [page, setPage] = useState(1);

  const pages = [
    {
      title: "Introduction",
      content: (
        <p>
          Welcome to the interactive composite look book! Use the arrows to navigate through each page.
        </p>
      ),
    },
    {
      title: "Chapter 1: Objectives",
      content: (
        <div>
          <p>This is where your story begins...</p>
          <p>Objectives to note is: </p>
            
        </div>
      ),
    },
    {
      title: "Chapter 2: Can you remember?",
      content: (
        <div>
          <p>Things get more interesting here!</p>
        <p>Can you recall... </p>
        </div>
      ),
    },
     {
      title: "Chapter 3: Content recap",
      content: (
        <div>
          <p>What does composite do?</p>
          <p>Let's guide you through it</p>

        </div>
      ),
    },
      {
      title: "Chapter 4: Time to test those skills",
      content: (
        <div>
          <p>Let the assessments begin</p>
        </div>
      ),
    },
    {
      title: "Chapter 5: Feedback time!",
      content: (
        <div>
          <p>Your results: </p>
           <p>... </p>
            <p>But what does this mean?</p>
        </div>
      ),
    },
         {
      title: "Chapter 6: Let's summarise :))",
      content: (
        <div>
          <p>Quick brief </p>
          <p>Number 1...</p>
            
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: <p>Thanks for reading 🎉</p>,
    },
  ];

  const totalPages = pages.length;

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="app-container">
      <div className="page-container">
        <div
          className={`arrow left ${page === 1 ? "disabled" : ""}`}
          onClick={prevPage}
        >
          ←
        </div>

        <Page title={pages[page - 1].title}>{pages[page - 1].content}</Page>

        <h2 className="page-number">
          Page {page} of {totalPages}
        </h2>

        <div
          className={`arrow right ${page === totalPages ? "disabled" : ""}`}
          onClick={nextPage}
        >
          →
        </div>
      </div>
    </div>
  );
}

export default App;

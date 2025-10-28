import React from "react";

interface PageProps {
  title: string;
  children?: React.ReactNode; // custom content like components, images, etc.
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div className="pageContent">
      <h2 className="title">{title}</h2>
      <div className="content">{children}</div>
    </div>
  );
};

export default Page;

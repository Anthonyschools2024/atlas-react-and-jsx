import React from 'react';

/**
 * A reusable component that renders a section with a title and content.
 * @param {object} props - The props object.
 * @param {string} props.title - The title of the section.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 */
function Section({ title, children }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Section;

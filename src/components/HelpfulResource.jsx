import React from 'react';
import OpenLink from './OpenLink';
import CopyLink from './CopyLink';

/**
 * A component that displays a helpful resource with a label and action icons.
 * @param {object} props - The props object.
 * @param {string} props.label - The description of the resource.
 * @param {string} props.link - The URL of the resource.
 */
function HelpfulResource({ label, link }) {
  return (
    <div className="helpful-resource">
      <span>{label}</span>
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
}

export default HelpfulResource;

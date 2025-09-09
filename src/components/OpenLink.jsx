import React from 'react';
import openIcon from '../assets/open.svg';

/**
 * A component that renders a clickable icon to open a link in a new tab.
 * @param {object} props - The props object.
 * @param {string} props.link - The URL to open.
 */
function OpenLink({ link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={openIcon} alt="Open link in new tab" />
    </a>
  );
}

export default OpenLink;

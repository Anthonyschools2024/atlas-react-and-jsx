import React from 'react';
import copyIcon from '../assets/copy.svg';

/**
 * A component that renders a clickable icon to copy a link to the clipboard.
 * @param {object} props - The props object.
 * @param {string} props.link - The URL to copy.
 */
function CopyLink({ link }) {
  const handleCopy = () => {
    // navigator.clipboard.writeText is the modern way, but execCommand has better support
    // and is more reliable in embedded environments like iframes.
    const tempInput = document.createElement('input');
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    // Optional: Add user feedback, e.g., a toast notification saying "Copied!"
  };

  return (
    <img
      src={copyIcon}
      alt="Copy link to clipboard"
      className="copy"
      onClick={handleCopy}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default CopyLink;

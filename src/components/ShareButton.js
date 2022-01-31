import React from 'react';

import shareIcon from '../images/shareIcon.svg';

import '../css/ShareButton.css';

function ShareButton() {
  const copyToClipboard = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard.writeText(urlToCopy);
    // eslint-disable-next-line no-alert
    alert('Link copied!');
  };

  return (
    <div
      className="share-button-container"
    >
      <button
        className="share-button"
        type="button"
        data-testid="share-btn"
        onClick={ copyToClipboard }
      >
        <img
          className="share-button-icon"
          src={ shareIcon }
          alt="share-button"
        />
      </button>
    </div>
  );
}

export default ShareButton;

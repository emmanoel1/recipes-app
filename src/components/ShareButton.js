import React, { useState } from 'react';

import shareIcon from '../images/shareIcon.svg';

import '../css/ShareButton.css';

function ShareButton() {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard.writeText(urlToCopy);
    // eslint-disable-next-line no-alert
    setCopy(!copy);
  };

  return (
    <div
      className="share-button-container"
    >
      {
        copy
          ? (
            <button
              className="share-button"
              onClick={ copyToClipboard }
              type="button"
            >
              Link copied!
            </button>
          )
          : (
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
          )
      }
    </div>
  );
}

export default ShareButton;

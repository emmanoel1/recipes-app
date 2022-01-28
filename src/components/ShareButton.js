import React from 'react';

import shareIcon from '../images/shareIcon.svg';

import '../css/ShareButton.css';

function ShareButton() {
  return (
    <div
      className="share-button-container"
    >
      <button
        className="share-button"
        type="button"
        data-testid="share-btn"
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

import React, { useState } from 'react';

import { PropTypes } from 'prop-types';

import shareIcon from '../images/shareIcon.svg';

import '../css/ShareButton.css';

function ShareButton({ id, category }) {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${category}/${id}`);
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

ShareButton.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShareButton;

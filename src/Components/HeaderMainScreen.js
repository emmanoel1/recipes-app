import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './HeaderMainScreen.css';

function HeaderMainScreen() {
  return (
    <div>
      <header
        className="header-elements-container"
      >
        <button
          type="button"
          data-testid="profile-top-btn"
          aria-label="profile-top-btn"
        >
          <img
            src={ profileIcon }
            alt="profile-button"
          />
        </button>
        <h1
          data-testid="page-title"
        >
          Foods
        </h1>
        <button
          type="button"
          data-testid="search-top-btn"
          aria-label="search-top-btn"
        >
          <img
            src={ searchIcon }
            alt="search-button"
          />
        </button>
      </header>
    </div>
  );
}

export default HeaderMainScreen;

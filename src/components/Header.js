import React, { useState } from 'react';

import { PropTypes } from 'prop-types';

import SearchBar from './SearchBar';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

import '../css/Header.css';

function Header({ title, profile, explore, pageTitle }) {
  const [searchInputStatus, setSearchInputStatus] = useState(false);

  const toggleSearchInput = () => {
    setSearchInputStatus(!searchInputStatus);
  };

  return (
    <div>
      <header>
        {
          profile && (
            <a
              className="header-profile-link"
              href="/profile"
            >
              <img
                data-testid="profile-top-btn"
                src={ profileIcon }
                alt="profile-button"
              />
            </a>
          )
        }
        {
          title && (
            <h1
              className="header-title"
              data-testid="page-title"
            >
              {pageTitle}
            </h1>
          )
        }
        {
          explore && (
            <button
              className="header-explore-button"
              type="button"
              onClick={ toggleSearchInput }
            >
              <img
                className="header-explore-img"
                data-testid="search-top-btn"
                src={ searchIcon }
                alt="search-button"
              />
            </button>
          )
        }
      </header>
      <div>
        {
          searchInputStatus && (
            <SearchBar />
          )
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  explore: PropTypes.bool,
  pageTitle: PropTypes.string.isRequired,
  profile: PropTypes.bool.isRequired,
  title: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  explore: false,
};

export default Header;

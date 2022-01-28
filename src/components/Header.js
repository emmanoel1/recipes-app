import React, { useState } from 'react';

import { PropTypes } from 'prop-types';

import SearchInput from './SearchBar/SearchInput';

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
            <SearchInput />
          )
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.bool.isRequired,
  profile: PropTypes.bool.isRequired,
  explore: PropTypes.bool.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Header;

import React from 'react';

function SearchInput() {
  return (
    <input
      className="input is-primary"
      data-testid="search-input"
      type="text"
      placeholder="Search Recipe"
    />
  );
}

export default SearchInput;

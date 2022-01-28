import React from 'react';

function SearchInput() {
  return (
    <input
      className="input is-sucess"
      data-testid="search-input"
      type="text"
      placeholder="Search Recipe"
    />
  );
}

export default SearchInput;

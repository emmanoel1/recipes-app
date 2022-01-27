import React from 'react';
import SearchBarHeader from './SearchBarHeader';
import SearchInput from './SearchInput';

function SearchBar() {
  return (
    <div className="box">
      <SearchBarHeader />
      <SearchInput />
    </div>
  );
}

export default SearchBar;

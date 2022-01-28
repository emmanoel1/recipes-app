import React from 'react';
import SearchInput from './SearchInput';

function SearchBarHeader() {
  return (
    <form className="box">
      <div className="field">
        <label className="radio" htmlFor="ingredient">
          <input
            id="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
            value="ingredient"
          />
          Busca Por Ingrediente
        </label>
      </div>
      <div className="field">
        <label className="radio" htmlFor="name">
          <input
            id="name"
            type="radio"
            data-testid="name-search-radio"
            value="name"
          />
          Busca Por Nome
        </label>
      </div>
      <div className="field">
        <label className="radio" htmlFor="letter">
          <input
            id="letter"
            type="radio"
            data-testid="first-letter-search-radio"
            value="letter"
          />
          Busca Pela Primeira letra
        </label>
      </div>
      <div className="field">
        <button
          type="button"
          className="button is-primary"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </div>
      <SearchInput />
    </form>
  );
}

export default SearchBarHeader;

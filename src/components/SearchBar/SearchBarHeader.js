import React, { useState } from 'react';
import SearchInput from './SearchInput';

function SearchBarHeader() {
  const [radio, setRadio] = useState();
  console.log(radio);

  return (
    <form className="box">
      <div className="field">
        <label className="radio" htmlFor="ingredient">
          <input
            name="radio"
            id="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
            value="ingredient"
            onChange={ ({ target: { value } }) => setRadio(value) }
          />
          Busca Por Ingrediente
        </label>
      </div>
      <div className="field">
        <label className="radio" htmlFor="name">
          <input
            name="radio"
            id="name"
            type="radio"
            data-testid="name-search-radio"
            value="name"
            onChange={ ({ target: { value } }) => setRadio(value) }
          />
          Busca Por Nome
        </label>
      </div>
      <div className="field">
        <label className="radio" htmlFor="letter">
          <input
            name="radio"
            id="letter"
            type="radio"
            data-testid="first-letter-search-radio"
            value="letter"
            onChange={ ({ target: { value } }) => setRadio(value) }
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

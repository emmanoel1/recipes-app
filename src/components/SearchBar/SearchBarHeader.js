import React, { useState } from 'react';
import { useHistory } from 'react-router';
import handleBtn from './handleBtn';

function SearchBarHeader() {
  const history = useHistory();
  const [radio, setRadio] = useState('');
  const [input, setInput] = useState('');

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
        <input
          className="input is-primary"
          data-testid="search-input"
          type="text"
          placeholder="Search Recipe"
          value={ input }
          onChange={ ({ target: { value } }) => setInput(value) }
        />
      </div>
      <div className="field">
        <button
          type="button"
          className="button is-primary"
          data-testid="exec-search-btn"
          onClick={ () => {
            console.log(handleBtn(radio, input, history));
          } }
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBarHeader;

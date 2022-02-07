import React from 'react';
import { PropTypes } from 'prop-types';

const MAX_CATEGORIES = 5;

const mainStyle = {
  maxWidth: '700px',
  justifyContent: 'center',
};

const buttonStyle = {
  maxWidth: '200px',
  margin: '5px',
};

function ShowCategories({ categories, handleClick, type }) {
  return (
    <div className="container">
      <div className="buttons is-fullwidth" style={ mainStyle }>
        <button
          className="button is-dark is-fullwidth"
          data-testid="All-category-filter"
          onClick={ () => handleClick('all', type) }
          type="button"
          style={ buttonStyle }
        >
          All
        </button>
        {categories.map((category, index) => (
          index < MAX_CATEGORIES && (
            <button
              className="button is-dark is-fullwidth"
              data-testid={ `${category.strCategory}-category-filter` }
              key={ index }
              onClick={ () => handleClick(category.strCategory, type) }
              type="button"
              style={ buttonStyle }
            >
              {category.strCategory}
            </button>
          )
        ))}
      </div>
    </div>
  );
}

ShowCategories.propTypes = ({
  categories: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
});

export default ShowCategories;

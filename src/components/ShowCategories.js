import React from 'react';
import { PropTypes } from 'prop-types';

const MAX_CATEGORIES = 5;

function ShowCategories({ categories, handleClick }) {
  return (
    <div>
      <button
        data-testid="All-category-filter"
        onClick={ () => handleClick('all') }
        type="button"
      >
        All
      </button>
      {categories.map((category, index) => (
        index < MAX_CATEGORIES && (
          <button
            data-testid={ `${category.strCategory}-category-filter` }
            key={ index }
            onClick={ () => handleClick(category.strCategory) }
            type="button"
          >
            {category.strCategory}
          </button>
        )
      ))}
    </div>
  );
}

ShowCategories.propTypes = ({
  categories: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
});

export default ShowCategories;

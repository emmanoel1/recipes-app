import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/FoodCategory.css';

function FoodCategory({ foodCategory }) {
  return (
    <div
      className="food-category-container"
    >
      <h2
        data-testid="recipe-category"
      >
        { foodCategory }
      </h2>
    </div>
  );
}

FoodCategory.propTypes = {
  foodCategory: PropTypes.string.isRequired,
};

export default FoodCategory;

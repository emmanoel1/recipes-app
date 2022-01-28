import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/FoodTitle.css';

function FoodTitle({ foodTitle }) {
  return (
    <div
      className="header-container"
    >
      <h1
        data-testid="recipe-title"
      >
        { foodTitle }
      </h1>
    </div>
  );
}

FoodTitle.propTypes = {
  foodTitle: PropTypes.string.isRequired,
};

export default FoodTitle;

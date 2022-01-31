import React from 'react';

import { PropTypes } from 'prop-types';

import '../css/RecipePicture.css';

function RecipePicture({ recipeImgUrl }) {
  return (
    <div>
      <div>
        <img
          className="recipe-picture"
          data-testid="recipe-photo"
          src={ recipeImgUrl }
          alt="recipe"
        />
      </div>
    </div>
  );
}

RecipePicture.propTypes = {
  recipeImgUrl: PropTypes.string.isRequired,
};

export default RecipePicture;

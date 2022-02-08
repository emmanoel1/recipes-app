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

RecipePicture.defaultProps = {
  recipeImgUrl: '',
};

RecipePicture.propTypes = {
  recipeImgUrl: PropTypes.string,
};

export default RecipePicture;

import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/FoodPicture.css';

function FoodPicture({ foodImgUrl }) {
  return (
    <div>
      <div>
        <img
          src={ foodImgUrl }
          alt="food"
        />
      </div>
    </div>
  );
}

FoodPicture.propTypes = {
  foodImgUrl: PropTypes.string.isRequired,
};

export default FoodPicture;

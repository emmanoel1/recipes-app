import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/FoodVideo.css';

function FoodVideo({ foodVideo }) {
  return (
    <div>
      <h1
        className="video-header"
      >
        Video
      </h1>
      <div
        className="food-video-container"
      >
        <iframe
          className="food-video"
          data-testid="video"
          title="food-video"
          src={ foodVideo }
        >
          Sorry, no support from your Browser
        </iframe>
      </div>
    </div>
  );
}

FoodVideo.propTypes = {
  foodVideo: PropTypes.string.isRequired,
};

export default FoodVideo;

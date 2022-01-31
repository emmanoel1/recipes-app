import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, image, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <h1 data-testid={ `${index}-card-name` }>{name}</h1>
      <img
        alt={ name }
        data-testid={ `${index}-card-img` }
        src={ image }
      />
    </div>
  );
}

Card.propTypes = ({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
});

export default Card;

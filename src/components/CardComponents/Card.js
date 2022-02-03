import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, image, index, path, cardType }) {
  return (
    <a
      data-testid={ `${index}-${cardType}-card` }
      href={ path }
    >
      <h1 data-testid={ `${index}-card-name` }>{name}</h1>
      <img
        alt={ name }
        data-testid={ `${index}-card-img` }
        src={ image }
      />
    </a>
  );
}

Card.propTypes = ({
  cardType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
});

export default Card;

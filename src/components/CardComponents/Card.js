import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, image, index, cardType }) {
  return (
    <div
      data-testid={ `${index}-${cardType}-card` }
    >
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
  cardType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export default Card;

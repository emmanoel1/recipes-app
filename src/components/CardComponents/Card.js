import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, image, index, id, type }) {
  return (
    <a
      data-testid={ `${index}-recipe-card` }
      href={ `/${type}/${id}` }
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
});

export default Card;

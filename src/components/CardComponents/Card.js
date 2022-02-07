import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, image, index, cardType }) {
  return (
    <div
      className="box"
      data-testid={ `${index}-${cardType}-card` }
      style={ { margin: '20px', maxWidth: '300px', maxHeight: '400px' } }
    >
      <h1 className="title" data-testid={ `${index}-card-name` }>{name}</h1>
      <figure className="image">
        <img
          alt={ name }
          className="is-rounded"
          data-testid={ `${index}-card-img` }
          src={ image }
        />
      </figure>
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

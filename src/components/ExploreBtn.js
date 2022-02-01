import React from 'react';
import PropTypes from 'prop-types';

function ExploreBtn({ children, type }) {
  return (
    <a href={ `/explore/${type}` }>
      <h1 data-testid={ `explore-${type}` }>
        { children }
      </h1>
    </a>
  );
}

ExploreBtn.propTypes = ({
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

export default ExploreBtn;

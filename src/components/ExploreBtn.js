import React from 'react';
import PropTypes from 'prop-types';

const titleStyle = {
  width: 'fit-content',
  margin: '20px',
  justifySelf: 'center',
};

function ExploreBtn({ children, type }) {
  return (
    <a style={ titleStyle } href={ `/explore/${type}` }>
      <h1 className="title" data-testid={ `explore-${type}` }>
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

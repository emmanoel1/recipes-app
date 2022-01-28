import React from 'react';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import '../css/Footer.css';

const Footer = () => (
  <footer data-testid="footer">
    <a href="/drinks">
      <img alt="Go to drinks" data-testid="drinks-bottom-btn" src={ drinkIcon } />
    </a>
    <a href="/explore">
      <img alt="Go to explore" data-testid="explore-bottom-btn" src={ exploreIcon } />
    </a>
    <a href="/foods">
      <img alt="Go to foods" data-testid="food-bottom-btn" src={ mealIcon } />
    </a>
  </footer>
);

export default Footer;

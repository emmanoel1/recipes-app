import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function FoodRecipes() {
  return (
    <div>
      <Header
        title
        profile
        explore
        pageTitle="Foods"
      />
      Foods
      <Footer />
    </div>
  );
}
export default FoodRecipes;

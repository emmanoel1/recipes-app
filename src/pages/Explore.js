import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreBtn from '../components/ExploreBtn';

import '../css/MainContainerRecipes.css';

function Explore() {
  return (
    <div>
      <Header
        title
        profile
        pageTitle="Explore"
      />
      <main className="mainContent">
        <ExploreBtn type="foods">Explore Foods</ExploreBtn>
        <ExploreBtn type="drinks">Explore Drinks</ExploreBtn>
      </main>
      <Footer />
    </div>
  );
}
export default Explore;

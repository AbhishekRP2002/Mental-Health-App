import React from 'react';
import MentalApp from '../components/Home_components/MentalApp';
import Offers from '../components/Home_components/Offers';
import Share from '../components/Home_components/Share';
import Pricing from '../components/Home_components/Pricing';
import Contact from '../components/Home_components/Contact';
function Home() {
  return (
    <div>
    <MentalApp />
    <Offers />
    <Share />
    <Pricing />
    <Contact />
    </div>
  )
}

export default Home;


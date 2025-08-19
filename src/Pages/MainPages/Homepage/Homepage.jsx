import React from 'react';
import Hero from '../../../components/Hero';
import Services from '../../../components/Services';
import Projects from '../../../components/Projects';
import Packages from '../../../components/Packages';
import Reviews from '../../../components/Reviews';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Packages />
      <Reviews />
    </div>
  );
};

export default Homepage;

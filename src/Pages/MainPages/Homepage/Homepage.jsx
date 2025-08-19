import React from 'react';
import Hero from '../../../components/Hero';
import Services from '../../../components/Services';
import Projects from '../../../components/Projects';
import Packages from '../../../components/Packages';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Packages/>
    </div>
  );
};

export default Homepage;

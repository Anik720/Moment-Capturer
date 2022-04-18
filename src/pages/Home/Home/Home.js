import React from 'react';
import Banner from '../../Banner/Banner';
import Demowork from '../DemoWork/Demowork';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Services></Services>
      <Demowork></Demowork>
    </div>
  );
};

export default Home;

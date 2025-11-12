import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller';
import Ourpolicy from '../components/Ourpolicy';
import Subscribe from '../components/Subscribe';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection /> 
      <BestSeller />
      <Ourpolicy />
      <Subscribe />
    </div>
  )
}

export default Home

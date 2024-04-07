import React from 'react'
import Nav from '../globals/Nav'
import { Hero } from '../globals/Hero'

import FeatureNav from '../globals/FeatureNav'
const Home = () => {
  return (
    <div className='flex flex-col'>
      <header className=''>
      <Nav/>
      </header>
     <main className='flex w-full items-center flex-col lg:mt-32'>
     
     </main>
      <Hero/>
      <FeatureNav/>
    
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';

function About() {
  return (
    <div className='h-screen bg-black text-white flex flex-col justify-start'>
      <div className='max-w-screen-2xl'>
          <Navbar></Navbar>
          <AboutSection />
      </div>
    </div>
  )
}

export default About

import React from 'react'
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';

function About() {
  return (
    <div className='bg-black w-screen h-screen text-white '>
      <Navbar></Navbar>
      <AboutSection />
    </div>
  )
}

export default About

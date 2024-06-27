import React from 'react'
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

function Project() {
  return (
    <div className=' bg-black text-white'>
        <Navbar></Navbar>
        <div className='mt-16'>
            <div className='flex flex-col justify-center'>
                <Projects></Projects>
            </div>
        </div>
    </div>
  )
}

export default Project

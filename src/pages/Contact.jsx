import React from 'react'
import Navbar from '../components/Navbar'
import ContactComponent from '../components/ContactComponent';

function Contact() {
  return (
    <div className='h-screen bg-black text-white flex flex-col justify-start'>
      <Navbar></Navbar>
      <ContactComponent></ContactComponent>
    </div>
  )
}

export default Contact

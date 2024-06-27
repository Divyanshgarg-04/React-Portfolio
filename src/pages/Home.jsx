import React from 'react'
// import image from '../assets/image.avif';
import Navbar from '../components/Navbar.jsx';
import HomeComponent from '../components/HomeComponent.jsx';
function Home() {
    return (
        <div className='bg-black w-screen h-screen text-white '>
            <Navbar />
            <HomeComponent />
        </div>
    )
}

export default Home

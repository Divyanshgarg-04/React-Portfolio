import React from 'react'
import image from '../assets/image.avif'

function Projectcard({ ProjectName = 'Enter the project Name', }) {
    return (
        <div className='flex flex-row justify-center'>
            <div className='bg-blue-500 m-2 my-6 rounded-xl cursor-pointer h-full w-full sm:w-3/5'>
                <div className='bg-gray-700 flex flex-row justify-center text-lg sm:text-3xl rounded-t-xl p-4 font-semibold'>
                    <h1>{ProjectName}</h1>
                </div>
                <div className='flex flex-row justify-center mx-4 sm:mx-12'>
                    <img src={image} alt="Project-Image" className='w-full mx-10 my-4 sm:my-8 border-white border-4 rounded-xl ' />
                </div>
                <div className='px-6 sm:px-20 text-lg text-center sm:text-2xl font-semibold mb-4'>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati numquam optio hic officia, sed aperiam nulla sit necessitatibus officiis explicabo commodi. Cum tempore et repudiandae quam quos minus eveniet dolore!
                    </h1>
                </div>
                <div className=' flex flex-row justify-center mb-2'>
                    <a href="https://google.com" target="__blank" className='bg-gray-700 w-60 rounded-xl m-2 font-semibold text-xl flex flex-row justify-center p-3 hover:bg-gray-900'>
                        Demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-2 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projectcard

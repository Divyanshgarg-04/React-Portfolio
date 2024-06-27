import React from 'react'
import DeveloperImage from '../assets/Developer.png';

export default function HomeComponent() {
    return (
        <div className='w-full flex flex-row justify-center'>
            <div className='flex justify-between flex-row mt-14 sm:mt-0 w-1/2'>
                <div className='sm:ml-20 flex flex-col justify-center pl-4 sm:p-6 sm:pl-10 text-sm sm:text-3xl rounded text-white font-semibold'>
                    <div className='my-2 '>
                        Hello world!
                    </div>
                    <div className='my-2'>
                        I'm <span className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'>Divyansh Garg</span>
                    </div>
                    <div className='my-2'>
                        a,
                    </div>
                    <div className=''>
                    <h1 className='font-semibold type-fruit text-sm sm:text-4xl text-purple-600'> </h1>
                    </div>
                </div>
            </div>
                <div className='h-full w-1/2 flex flex-row justify-end m-2 sm:mr-10 mt-14 '>
                <img src={DeveloperImage} alt="my-image" className='sm:w-2/3 sm:h-full ' />
                </div>
        </div>
    )
}

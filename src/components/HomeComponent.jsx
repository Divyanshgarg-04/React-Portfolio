import React from 'react'
import DeveloperImage from '../assets/Developer.png';

export default function HomeComponent() {
    return (
        <div className='w-full sm:h-[85%] flex flex-col sm:flex-row justify-center'>

            <div className='h-full sm:w-[40%] flex flex-row justify-center sm:justify-center m-2 sm:ml-0'>
                <div className='w-[70%] sm:w-full flex flex-row sm:justify-start'>
                    <img src={DeveloperImage} alt="my-image" className='w-full h-full' />
                </div>
            </div>

            <div className='flex flex-row justify-start sm:justify-start mt-6 w-full sm:w-[40%] sm:ml-16'>
                <div className='ml-16 sm:ml-10 flex flex-col justify-center pl-4 sm:p-6 text-2xl sm:text-3xl rounded text-white font-semibold'>
                    <div className='py-2 '>
                        Hello world!
                    </div>
                    <div className='py-1 sm:py-2'>
                        I'm <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'>Divyansh Garg</span>
                    </div>
                    <div className='py-1 sm:py-2'>
                        a,
                    </div>
                    <div className='pt-1 sm:pt-2'>
                        <h1 className='font-semibold type-fruit text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'> </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

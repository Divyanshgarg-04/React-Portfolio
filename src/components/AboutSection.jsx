import React from 'react'
import image from '../assets/image.avif';
// import Skills from './Skills';

function AboutSection() {
    return (
        <div className='w-full h-8/9 flex flex-col sm:flex-row justify-center'>
            {/* Right Part */}
            <div className='h-1/2 w-[80%] mt-10 sm:h-[80%] sm:w-[40%] flex flex-row justify-end ml-10 sm:ml-10 sm:mt-20 '>
                <img src={image} alt="my-image" className='h-full rounded-xl border-2 sm:border-4 border-white' />
            </div>

            {/* Left Part */}
            <div className='flex justify-between flex-row px-6  my-14 w-full sm:w-[60%] h-[1/2] sm:h-[55%] '>
                <div className='flex flex-col justify-center text-center text-sm sm:text-3xl rounded text-white font-semibold'>
                    <h1 className=''>Hello there! I'm Divyansh, an enthusiastic undergraduate student at NIT Rourkela with a deep passion for technology. I thrive on exploring the latest advancements in this ever-evolving field!
                    </h1>
                    <h1>
                        When I'm not buried in textbooks or coding challenges, you'll find me maintaining a balanced lifestyle. Whether it's on the sports field or hanging out with friends, I believe in enjoying every aspect of life.
                        <h1>
                            Let's embark on this exciting tech journey together and make something incredible happen!
                        </h1>
                    </h1>
                </div>
            </div>


        </div>
    )
}

export default AboutSection

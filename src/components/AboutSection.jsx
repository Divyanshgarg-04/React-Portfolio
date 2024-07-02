import React from 'react'
import image from '../assets/download.png';
import Skills from './Skills';
import CPP from '../assets/CPP_image-removebg-preview.png';
import JS from '../assets/JS-removebg-preview.png';
import C from '../assets/c-removebg-preview.png';
import CSS from '../assets/css-removebg-preview.png';
import ReactImage from '../assets/react-removebg-preview.png';
import NodeJS from '../assets/nodejs-removebg-preview.png';
import MongoDb from '../assets/mongoDb-removebg-preview.png';
import Express from '../assets/express-removebg-preview.png';
import GitImage from '../assets/git-removebg-preview.png';
import GitHub from '../assets/github-removebg-preview.png'

function AboutSection() {
    return (
        <div>
            <div className='w-full h-8/9 flex flex-col sm:flex-row justify-center bg-black pb-2'>
                {/* Right Part */}
                <div className='w-[59%] mt-4 sm:h-[70%] sm:w-[35%] flex flex-row justify-center sm:justify-start ml-20 sm:ml-2 '>
                    <img src={image} alt="my-image" className='h-full rounded-full border-2 sm:border-4 border-white' />
                </div>

                {/* Left Part */}
                <div className='flex justify-between flex-row px-6 my-6 sm:my-14 w-full sm:w-[60%] h-[1/2] sm:h-[55%] '>
                    <div className='flex flex-col justify-center text-center text-sm sm:text-3xl rounded text-white font-semibold'>
                        <h1>Hello there! I'm Divyansh, an enthusiastic undergraduate student at NIT Rourkela with a deep passion for technology. I thrive on exploring the latest advancements in this ever-evolving field!
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
            <hr />
            <div className='bg-black'>
                <div className='flex flex-row justify-center py-6 underline underline-offset-8 sm:mb-4'>
                    <h1 className='text-4xl sm:text-7xl font-semibold'>Skills</h1>
                </div>

                <div className='grid grid-cols-5 pl-4'>
                    <Skills>
                        <img src={JS} alt="JS-Image" className='mt-4 p-1 sm:p-6 sm:pl-4 sm:mt-8'/>
                    </Skills>
                    <Skills>
                        <img src={CPP} alt="CPP-Image" className='mt-4 p-1 sm:p-6 sm:pl-4 sm:mt-8'/>
                    </Skills>
                    {/* C */}
                    <Skills>
                        <img src={C} alt="C-image" className='mt-3 p-1 sm:p-6 sm:pl-4 sm:mt-3'/>
                    </Skills>
                    {/* CSS */}
                    <Skills>
                        <img src={CSS} alt="css-image" className='mt-3 p-1 sm:p-6 sm:pt-0 sm:pl-4 sm:mt-4'/>
                    </Skills>
                    {/*  */}
                    <Skills>
                        <img src={ReactImage} alt="react-image" className='mt-4 p-1 sm:p-6 sm:pt-0 sm:pl-4 sm:mt-8'/>
                    </Skills>
                    <Skills>
                        <img src={NodeJS} alt="node-image" className='mt-5 p-1 sm:p-6 sm:pt-0 sm:pl-4 sm:mt-[4.5rem]'/>
                    </Skills>
                    <Skills>
                        <img src={GitImage} alt="git-image" className='mt-3 p-1 sm:p-6 sm:pt-0 sm:pl-4 sm:mt-6'/>
                    </Skills>
                    <Skills>
                        <img src={Express} alt="express-image" className='mt-6 p-1 pl-2 sm:p-6 sm:pt-0 sm:pl-6 sm:mt-20'/>
                    </Skills>
                    <Skills>
                        <img src={MongoDb} alt="Mongo-image" className='h-14 md:h-48 mt-1 p-1 ml-2 sm:pt-0 sm:ml-16 sm:mt-4'/>
                    </Skills>
                    <Skills>
                        <img src={GitHub} alt="Mongo-image" className='mt-312w p-1 sm:p-6 sm:pt-0 sm:pl-4 sm:mt-6'/>
                    </Skills>
                </div>
            </div>
            <div className='bg-black h-10'>

            </div>
        </div>
    )
}

export default AboutSection

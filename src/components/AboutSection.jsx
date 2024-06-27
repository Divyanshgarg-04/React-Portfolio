import React from 'react'
import image from '../assets/image.avif';
import Skills from './Skills';

function AboutSection() {
  return (
    <div>
      <div className='w-full'>
                <div className='flex justify-between flex-row mt-14'>
                    <h1 className='m-2 border-2 border-white rounded-lg p-4'>asjasdjsvd
                        adkagsdjkasbdka
                        adkaskdaskd
                        asdjkasdkashvh Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in, autem sunt alias, quisquam necessitatibus fugia nihil molestias voluptatem nemo asperiores maiores?</h1>
                    <img src={image} alt="my-image" className='m-2 w-[32.5%] rounded-lg border-2 border-blue-800' />
                </div>
                <div className='flex flex-row justify-end h-10 p-2 mt-8'>
                    <footer className=''>Include some Icons with the link for the </footer>
                </div>
                <div>
                    <Skills></Skills>
                </div>
            </div>
    </div>
  )
}

export default AboutSection

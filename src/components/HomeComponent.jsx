import React from 'react'
import DeveloperImage from '../assets/Developer.png';

export default function HomeComponent() {
    return (
            <div className='w-full'>
                <div className='flex justify-between flex-row mt-14'>
                    <h1 className='m-2 border-2 border-white rounded-lg p-4'>asjasdjsvd
                        adkagsdjkasbdka
                        adkaskdaskd
                        asdjkasdkashvh Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in, autem sunt alias, quisquam necessitatibus fugia nihil molestias voluptatem nemo asperiores maiores?</h1>
                    <img src={DeveloperImage} alt="my-image" className='m-2 w-[32.5%] rounded-lg border-2 border-blue-800' />
                </div>
            </div>
    )
}

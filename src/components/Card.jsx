import React from 'react'

function Card({ComponentColor='green'}) {
  return (
    ComponentColor==='green'?(
    <div className='bg-green-500 grid-span-1 m-2 rounded-xl p-4 cursor-pointer h-[240px]'>
        Hi there
    </div>
    ):(
        ComponentColor === 'blue'?(
            <div className='bg-blue-500 grid-span-1 m-2 rounded-xl p-4 cursor-pointer h-[240px]'>Hi there
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>

            </div>
        ):(
            <div className='bg-yellow-500 grid-span-1 m-2 rounded-xl p-4 cursor-pointer h-[240px]'>Hi there</div>
        )
    )
  )
}

export default Card

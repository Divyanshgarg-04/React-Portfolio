import React from 'react'

function ContactComponent() {
  return (
    <div className='flex flex-row justify-center '>
      <div className='mt-8'>
        <div className='m-4'>
            <label className='m-2 text-3xl font-semibold'>Name</label>
            <br />
            <input type="text" placeholder='Enter your Name' className='ml-2 rounded-xl mt-2 text-xl sm:text-2xl text-left p-2 px-4 w-80 sm:w-96 text-black outline-none'/>
        </div>
        <div className='m-4'>
            <label className='m-2 text-3xl font-semibold'>Email</label>
            <br />
            <input type="text" placeholder='Email Address' className='ml-2 rounded-xl mt-2 text-xl sm:text-2xl text-left p-2 px-4 w-80 sm:w-96 text-black outline-none'/>
        </div>
        <div className='m-4'>
            <label className='m-2 text-3xl font-semibold'>Message</label>
            <br />
            <textarea type="text" placeholder='Message' className='ml-2 rounded-xl mt-2 text-xl sm:text-2xl p-2 px-4 w-80 sm:w-96 h-32 text-black max-h-40 outline-none'/>
        </div>
        <div className='bg-purple-700 my-2 mx-4 ml-6 p-2 rounded text-center text-xl hover:bg-purple-800 outline-none'>
            <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent

import React from 'react'

function Skills({children}) {
  return (
    <div className='bg-white m-2 mr-4 h-14 sm:h-48 rounded-lg border-white col-span-1 hover:border-8 border-red'>
      <div className='h-10'>
        {children}
      </div>
    </div>
  )
}

export default Skills

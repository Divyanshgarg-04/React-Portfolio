import React from 'react'

function Skills({children}) {
  return (
    <div className='bg-white m-2 h-48 w-[15%] rounded-lg border-2 border-white'>
      <div className='h-10 w-[80%]'>
        {children}
      </div>
    </div>
  )
}

export default Skills

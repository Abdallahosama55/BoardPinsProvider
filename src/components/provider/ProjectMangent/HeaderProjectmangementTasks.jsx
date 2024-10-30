import React from 'react'
import right from '../../../assets/icons/right.png'
function HeaderProjectmangementTasks({title}) {
  return (
    <div className='  font-[700] text-2xl px-4 gap-2 items-center flex '>
        
        <img src={right} className=' w-[35px] p-2  bg-[#E5E5FF] rounded-lg'/>
        {title}</div>
  )
}

export default HeaderProjectmangementTasks
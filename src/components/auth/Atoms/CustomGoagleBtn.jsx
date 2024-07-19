import React from 'react'
import goagle from '../../../assets/icons/goagle.png'
function CustomGoagleBtn({nameBtn}) {
  return (
    <>
     <button className=' bg-[#F5F5F5] justify-center items-center rounded-xl text-dark w-full py-3  text-xl flex gap-3 items-center'>
        
        <img src={goagle} className=' w-[25px]'/>
        
       {nameBtn|| "Goagle"}   
        
        
        </button>
    
    </>
  )
}

export default CustomGoagleBtn
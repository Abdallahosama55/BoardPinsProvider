import React from 'react'
import goagle from '../../../assets/icons/goagle.png'
import { Link } from 'react-router-dom'
function CustomGoagleBtn({nameBtn ,path}) {
  return (
    <>
     <Link to={path} className=' bg-[#F5F5F5] justify-center items-center rounded-xl text-dark w-full py-3  text-xl flex gap-3 items-center' type='submit'>
        
        <img src={goagle} className=' w-[25px]'/>
        
       {nameBtn|| "Goagle"}   
        
        
        </Link>
    
    </>
  )
}

export default CustomGoagleBtn
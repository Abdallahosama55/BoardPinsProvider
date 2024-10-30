import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
function ButtonaddChat({onClick ,text}) {
  return (
    <button className=' border-[#6161FF] border-[1px] py-2 font-[500] rounded-xl w-full text-center text-[#6161FF] flex items-center justify-center gap-3' onClick={onClick} >

<IoAddCircleOutline size={22}/>

<span> {text}</span>
    </button>
  )
}

export default ButtonaddChat
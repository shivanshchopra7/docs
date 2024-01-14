import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
<FaRegFileAlt />
<p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    
    <div className='footer absolute bottom-0  w-full  left-0 '>
<div className='flex items-center justify-between py-3 px-8  mb-3' >
    <h5>.4mb</h5>
    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
   <IoDownloadOutline size="1em" color="#fff"/>
   </span>
</div>
<div className='tag w-full bg-green-500 py-4 flex items-center justify-center'>
<h3 className='text-sm font-semibold '>Download Now</h3>
</div>
    </div>
    </div> 
  )
}

export default Card
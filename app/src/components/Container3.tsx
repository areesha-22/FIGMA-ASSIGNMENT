import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
const Container3 = () => {
  return (
   // pl-56 pr-56 dainay say image q small horahi hai
   <div className='bg-[#043873] justify-center items-center p-11 '>
    <div className='flex  '>
     <div className= " gap-4 justify-center ">
    
      <h1 className='font-Inter font-bold text-white text-6xl'> Use as Extension</h1>
      <div>
          <Image 
            src="/yellow.png"
            alt="lineImage" 
            width={500}
            height={200}
          /></div>
    <p className='font-Inter font-normal text-white text-lg pt-6 leading-7'>Use the web clipper extension&lsquo; available on Chrome<br></br> and Firefox&lsquo; to save web pages  or take screenshots as notes.
</p>
<div className='pt-12 pb-5  gap-3'>
<button className='text-white bg-[#4F9CF9] font-Inter font-medium text-lg leading-6 rounded-md w-44 h-16 items-center justify-center gap-2 flex'>Let&apos;s Go <FaArrowRight /></button></div>
</div>

<div className="flex-1">
            <div>
          <Image 
            src="/image3.svg"
            alt="Banner Image" 
            width={586}
            height={379}
          /> 
           </div>
             
            </div></div>
   
   
    </div>
  )
}

export default Container3


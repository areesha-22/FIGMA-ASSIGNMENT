import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
const Container4 = () => {
  return (
    <div className=' top-auto bg-white pt-36 pb-36  '>
     
      <div className="flex-1">
            <div  className="h-screen flex justify-center   items-center ">
          <Image 
            src="/image4.svg"
            alt="Banner Image" 
            width={570}
            height={299}
          /> 
           <div className="flex ">
            <div className="flex flex-col flex-1  justify-center pb-12">
            <h1 className='font-Inter font-bold text-5xl'> Customise it to your needs</h1>
            <div>
          <Image 
            src="/yellow.png"
            alt="lineImage" 
            width={500}
            height={200}
          /></div>
           <p className='font-inter leading-7 font-normal text-lg'>Customise the app with plugins&lsquo; custom themes and multiple text editors (Rich  Text or Markdown). Or create your own scripts and plugins using the Extension API.
</p>
<div className='gap-3 pt-5 pb-5'>
<button className='w-44 h-16 bg-[#4F9CF9] font-medium text-lg text-white  rounded-lg items-center justify-center gap-2 flex'>Let&apos;s Go <FaArrowRight /></button></div>
         
          </div></div>
           
           
           
           </div> </div>
   
   
   
   
    </div>
  )
}

export default Container4

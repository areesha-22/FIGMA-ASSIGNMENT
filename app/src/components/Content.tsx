import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

const Contentbar = () => {
  return (
  <div className='flex flex-col items-center justify-between'>
    <div className='w-full absolute opacity-30'>
   
   <Image 
     src="/Element.svg"
     alt="Banner Image" 
     width={1920} height={548}
   /> 
    
</div>
    <div className='bg-[#043873] flex  justify-center  items-center p-16'>
      
      <div  className="flex flex-col flex-1" >
       <div className='pl-8'>
        <h2 className='text-white font-bold text-4xl font-Inter'>GET MORE DONE WITH WHITEPACE</h2>
     
      <p className='font-Inter pt-10  text-white  text-lg'>
      Project management software that enables your teams to collaborate&lsquo; plan&lsquo; analyze and manage everyday tasks
      </p>   <div className='pt-5 gap-2'>
      <button className='w-56 h-16 rounded-lg bg-[#4F9CF9] text-white items-center justify-center gap-2 flex '>Try Whitepace Free <FaArrowRight /></button></div></div>
      </div>
      <div className='flex-1'>
   
          <Image 
            src="/image1.svg"
            alt="Banner Image" 
            width={586}
            height={379}
          /> 
           
    </div>

    </div>
    </div>
  )
}

export default Contentbar

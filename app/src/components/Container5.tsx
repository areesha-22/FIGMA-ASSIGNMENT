import React from 'react'
import Image from 'next/image'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Container5 = () => {
  return (
    <div className=' items-center top-auto pt-52 pb-36 '>
       
      <div className='items-center justify-center  text-center'>
        
        <h1 className='font-Inter font-bold text-5xl '>Choose Your Plan</h1>
        <div className='pl-72'>
          <Image 
            src="/yellow.png"
            alt="lineImage" 
            width={300}
            height={200}
          /></div>
      <p className='font-Inter justify-center font-normal text-lg leading-7'>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the <br></br>right plan for you.</p>
      </div>


      {/* image div */}
      <div className='lg:flex gap-7 '>
      <div className='max-w-screen-xl max-h-screen pt-28  gap-8'>
     
<div className='pl-14 bg-white rounded-lg border hover:bg-[#043873] hover:text-white'>
<p className='text-2xl font-semibold font-Inter leading-9'>Free</p>
<h4 className='font-bold text-4xl font-Inter hover:text-[#FFE492] pt-5 leading-10'>$0</h4>
<p className='font-Inter font-medium text-lg pt-10 leading-6'>Capture ideas and find them quickly</p>
<div>
    <ul className='list-none font-Inter pt-4 font-normal text-base leading-5'>
      <li className='flex gap-3'> <IoMdCheckmarkCircleOutline /> Sync unlimited devices</li>
        <br></br><li  className='flex gap-3'> <IoMdCheckmarkCircleOutline />10 GB monthly uploads</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Customize Home dashboard and access extra widgets</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Connect primary Google Calendar account</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Add due dates, reminders, and notifications to your tasks</li>
      
    </ul>
    <div className='pt-4 pb-4 pl-10 pr-10'>
    <button className='w-40 h-12 rounded-lg border font-Inter font-medium text-base leading-5'>Get Started</button></div>
</div>
</div>
      </div>

     {/* container2 */}
     
     <div className='rounded-bl-xl mt-28  border bg-white hover:bg-[#043873] hover:text-white max-w-screen-xl max-h-screen '>
     <div className='pt-6 pb-20 pl-11 pr-11 gap-6 '>
     <p className='text-2xl font-semibold font-Inter   leading-9'>Personal</p>
<h4 className='font-bold text-4xl font-Inter pt-5  hover:text-[#FFE492] leading-10'>$11.99</h4>
<p className='font-Inter font-medium text-lg pt-10   leading-6'>Keep home and family on track</p>
<div>
    <ul className='list-none font-Inter pt-4 font-medium text-lg leading-5'>
      <li className='flex gap-3'> <  IoMdCheckmarkCircleOutline /> Sync unlimited devices</li>
        <br></br><li  className='flex gap-3'> <IoMdCheckmarkCircleOutline />10 GB monthly uploads</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Customize Home dashboard and access extra widgets</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Connect primary Google Calendar  account</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Add due dates, reminders, and notifications to your tasks</li>
      
    </ul>
    <div className=' '>
    <button className='w-40 h-12 bg-[#4F9CF9] rounded-xl font-Inter font-medium text-base text-white leading-5'>Get Started</button></div>
</div></div>
     </div>
     <div className=' rounded-xl border bg-white mt-28   max-w-screen-xl max-h-screen  hover:bg-[#043873] hover:text-white'>
     <div className=' pt-7 pb-28 pr-11 pl-11 gap-6'>
     <p className='text-2xl font-semibold font-Inter  leading-9'>Organization</p>
<h4 className='font-bold text-4xl font-Inter hover:text-[#FFE492] pt-5 leading-10'>$49.99</h4>
<p className='font-Inter font-medium text-lg  leading-6'>Capture ideas and find them quickly</p>
<div>
    <ul className='list-none font-Inter pt-4 font-normal text-base leading-5 '>
      <li className='flex gap-3'> <IoMdCheckmarkCircleOutline /> Sync unlimited devices</li>
        <br></br><li  className='flex gap-3'> <IoMdCheckmarkCircleOutline />10 GB monthly uploads</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Customize Home dashboard and access extra widgets</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Connect primary Google Calendar account</li>
        <br></br><li  className='flex gap-3'><IoMdCheckmarkCircleOutline />Add due dates, reminders, and notifications to your tasks</li>
      
    </ul>
    <div className='pt-4 pb-4 pl-10 pr-10'>
    <button className='w-40 h-12 rounded-lg border font-Inter font-medium text-base leading-5'>Get Started</button></div>
</div></div>
     </div></div>
    </div>
  )
}
 
export default Container5

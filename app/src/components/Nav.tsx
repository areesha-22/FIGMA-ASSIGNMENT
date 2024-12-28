import React from 'react'
import Image from 'next/image'
const Nav = () => {
  return (
    <div  className='bg-[#043873] w-full flex gap-44 p-9'>
      <div>
      <Image 
            src="/logo1.svg"
            alt="appelImage" 
            width={144}
            height={34}
          /></div>

<div>
    <ul className='list-none flex text-white gap-9'>
        <li>Product</li>
        <li>Solution</li>
        <li>Resources</li>
        <li>Pricing</li>
    </ul>
</div>
<div>
<button className='text-base font-bold w-28 h-10 bg-yellow-300 rounded-lg'>
    Login
</button>
</div>
    </div>
  )
}

export default Nav

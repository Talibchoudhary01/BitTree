import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className=' flex w-full justify-center  fixed z-10 '>
    <div className='bg-white w-[88vw] h-[12vh] flex   rounded-full  mt-11 relative'>
   
   <Link href={"/"} >
   <Image
   className='mx-11 mt-7 cursor-pointer' 
   src="./linktreeimage.svg" 
   alt="Profile picture"
   width={100}               
   height={200}            
   /></Link>




 <ul className='flex justify-center items-center font-semibold text-gray-800  gap-5 ml-4 cursor-pointer' >
    <Link href={"/"}><li>Products</li> </Link>
    <Link href={"/"}><li>Templates</li> </Link>
    <Link href={"/"}><li>Markertplace</li> </Link>
    <Link href={"/"}><li>Learn</li> </Link>
    <Link href={"/"}><li>Pricing</li> </Link>
 </ul>

 <span className='flex absolute right-4 top-2.5  items-center gap-4 '>
   <Link href="/Login"> <button className='bg-slate-200 h-[9vh] w-23 rounded-lg font-semibold cursor-pointer'>Log in </button>  </Link>
  <Link href="/Login">  <button className='h-[9vh] w-33 bg-[#1e2330] text-white rounded-full font-semibold cursor-pointer'>Sign Up free</button> </Link>
 </span>


    </div>
   </nav>
  )
}

export default Navbar

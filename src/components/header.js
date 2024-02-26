import React from 'react'
import { FaMicrophone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { MdVideoCameraBack } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import ButtonList from './button-list';
const Header = () => {
  return (
    <div className=' bg-black fixed  z-[1000]'>
    <div className='flex flex-col w-screen   '>
    <div className='font-bold text-4xl text-white mx-4 p-3 text-center w-screen flex justify-start '>
    
    <div className='mr-4 p-4 text-center w-[1050px] h-20 -mt-4 flex justify-center '>
    <input
      type='text'
      className=' w-1/2 text-xl py-2 px-4 rounded-3xl font-thin bg-transparent text-white border-gray-600 border-[0.1px]'
      placeholder='Search'
     />
     <CiSearch className='mx-4 my-2' size={25} />
     <FaMicrophone className='mx-4 my-2' size={20}/>
    </div>

    <div className='flex justify-center '>
    <div  className='mx-4'>     
       <MdVideoCameraBack/>
      </div>
    <div className='mx-4'>
      <CiBellOn/>
      </div>
    <div  className='mx-4'>
      <FaUserCircle/>
    </div>
    </div>
</div>

<div className='p-4 mb-2 -mt-4'>
  <ButtonList />
</div>
</div>
</div>
  )
}

export default Header
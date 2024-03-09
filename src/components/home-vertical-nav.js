import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
const HomeVerticalNav = () => {
  return (
    <div>
    <div className='w-full h-[150px] mt-[4.5rem] -ml-9  mb-8 text-white flex flex-col'>

    <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
    <div className='px-4'><IoHomeOutline  size={20}/></div>
     <div className='px-4'>Home</div>
    </div>

    
   <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
     
    <div className='px-4'><SiYoutubeshorts  size={20}/></div>
     <div className='px-4'>Shorts</div>

    </div>

   <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
   
    <div className='px-4'><MdOutlineSubscriptions size={20} /></div>
     <div className='px-4'>Subscriptions</div>
    
    </div>

   <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
     
    <div className='px-4'><SiYoutubemusic size={20} /></div>
     <div className='px-4'>YouTube Music </div>
    
    </div>
   
    <div class="flex items-center mt-2 mb-[20px] w-[300px] ml-[10px]">
       <div class="flex-1 border-t-[0.1px] border-gray-200 w-full"></div>
       </div>
       
    </div>
    </div>
  )
}

export default HomeVerticalNav
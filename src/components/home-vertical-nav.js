import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
const HomeVerticalNav = () => {
  return (
    <>
    <div className='w-full h-[150px] mt-[4.5rem]  -ml-9 text-white flex flex-col'>

    <div className='py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800  flex'>
    <div className='px-2 -ml-3 mr-6 mt-1'><IoHomeOutline  size={20}/></div>
     <div className=''>Home</div>
    </div>

    
   <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
     
    <div className='px-2 -ml-3 mr-6 mt-1'><SiYoutubeshorts  size={20}/></div>
     <div className=''>Shorts</div>

    </div>

   <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
     
    {/* <div className='px-2 -ml-3 mr-6 mt-1'><MdSubscriptions /></div> */}
    <div className='px-2 -ml-3 mr-6 mt-1'><MdOutlineSubscriptions size={20} /></div>
     <div className=''>Subscriptions</div>
    
    </div>

   <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
     
    <div className='px-2 -ml-3 mr-6 mt-1'><SiYoutubemusic size={20} /></div>
     <div className=''>YouTube Music </div>
    
    </div>
   
    </div>
    </>
  )
}

export default HomeVerticalNav
import React from 'react'
import { PiUserRectangleLight } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import { LuPlaySquare } from "react-icons/lu";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { MdOutlineChevronRight } from "react-icons/md";
const YouVerticalNav = () => {
    return (
        <>
        <div className='w-full h-[300px] mt-4 -ml-9  text-white flex flex-col'>

        <div className='mx-10 mt-3 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
        <div className='px-2 font-bold'>You</div>
        <div className='px-0'><MdOutlineChevronRight  size={20}/></div>
       </div>
        
        <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
       
        <div className='px-4'><PiUserRectangleLight  size={20}/></div>
         <div className='px-4'>Your Channel</div>
    
        </div>

       <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        <div className='px-4'><VscHistory  size={20}/></div>
         <div className='px-4'>History</div>
    
        </div>
    
       <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        {/* <div className='px-4'><MdSubscriptions /></div> */}
        <div className='px-4'><LuPlaySquare size={20} /></div>
         <div className='px-4'>Your Videos</div>
        
        </div>
    
       <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        <div className='px-4'><BsClockHistory size={20} /></div>
         <div className='px-4'>Watch Later</div>
        
        </div>

        <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><LiaDownloadSolid size={20} /></div>
          <div className='px-4'>Downloads </div>
         
         </div>

         <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><BiLike size={20} /></div>
          <div className='px-4'>Liked Videos </div>
         
         </div>
    
         <div class="flex items-center  mt-2 mb-[20px] w-[300px] ml-[10px]">
        <div class="flex-1 border-t-[0.1px] border-gray-200 w-full"></div>
        </div>
      

        </div>
        
         </>
      )
}

export default YouVerticalNav


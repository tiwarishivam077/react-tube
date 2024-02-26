import React from 'react'
import { PiUserRectangleLight } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import { LuPlaySquare } from "react-icons/lu";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

const YouVerticalNav = () => {
    return (
        <>
        <div className='w-full h-[260px] mt-8  -ml-9  text-white flex flex-col'>
        
        <div className='py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 rounded-lg flex'>
       
        <div className='px-2 -ml-3 mr-6 mt-1'><PiUserRectangleLight  size={20}/></div>
         <div className=''>Your Channel</div>
    
        </div>
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        <div className='px-2 -ml-3 mr-6 mt-1'><VscHistory  size={20}/></div>
         <div className=''>History</div>
    
        </div>
    
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        {/* <div className='px-2 -ml-3 mr-6 mt-1'><MdSubscriptions /></div> */}
        <div className='px-2 -ml-3 mr-6 mt-1'><LuPlaySquare size={20} /></div>
         <div className=''>Your Videos</div>
        
        </div>
    
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        <div className='px-2 -ml-3 mr-6 mt-1'><BsClockHistory size={20} /></div>
         <div className=''>Watch Later</div>
        
        </div>

        <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><LiaDownloadSolid size={20} /></div>
          <div className=''>Downloads </div>
         
         </div>

         <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><BiLike size={20} /></div>
          <div className=''>Liked Videos </div>
         
         </div>
    
         <div class="flex items-center my-[20px] w-[300px] ml-[10px]">
        <div class="flex-1 border-t-[0.1px] border-gray-200 w-full"></div>
        </div>
      

        </div>
        
         </>
      )
}

export default YouVerticalNav


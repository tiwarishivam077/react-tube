import React from 'react'
import { BiLike } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { LuMusic4 } from "react-icons/lu";
import { BiMoviePlay } from "react-icons/bi";
import { HiMiniSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { RiNewspaperLine } from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";
import { BsLightbulb } from "react-icons/bs";
import { MdOutlinePodcasts } from "react-icons/md";



const ExploreVerticalNav = () => {
    return (
        <>
        <div className='w-full h-[380px] mt-6 mb-[100px] -ml-9  text-white flex flex-col'>

        <div class="flex items-center my-2">
       <div class="flex-1 border-t-[0.1px] border-gray-200"></div>
       </div>


        <div className='py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800  flex'>
        
        {/* <div className='px-2 -ml-3 mr-2 mt-1'><MdHomeFilled /></div> */}
        <div className='px-2 -ml-3 mr-6 mt-1'><FiTrendingUp  size={20}/></div>
         <div className=''>Trending</div>
    
        </div>
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        <div className='px-2 -ml-3 mr-6 mt-1'><HiMiniShoppingBag  size={20}/></div>
         <div className=''>Shopping</div>
    
        </div>
    
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        {/* <div className='px-2 -ml-3 mr-6 mt-1'><MdSubscriptions /></div> */}
        <div className='px-2 -ml-3 mr-6 mt-1'><LuMusic4 size={20} /></div>
         <div className=''>Music</div>
        
        </div>
    
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        <div className='px-2 -ml-3 mr-6 mt-1'><BiMoviePlay size={20} /></div>
         <div className=''>Movies</div>
        
        </div>

        <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><HiMiniSignal size={20} /></div>
          <div className=''>Live </div>
         
         </div>

         <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><SiYoutubegaming size={20} /></div>
          <div className=''>Gaming </div>
         
         </div>

         <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><RiNewspaperLine size={20} /></div>
          <div className=''>News </div>
         
         </div>

         <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><TfiCup size={20} /></div>
          <div className=''>Sports </div>
         
         </div>
         <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><BsLightbulb size={20} /></div>
          <div className=''>Learning </div>
         
         </div>
         <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><BiLike size={20} /></div>
          <div className=''>Fashion & Beauty </div>
         
         </div>
         <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
         <div className='px-2 -ml-3 mr-6 mt-1'><MdOutlinePodcasts size={20} /></div>
          <div className=''>Podcasts </div>
         
         </div>
         
    
        </div>
        
         </>
      )
}

export default ExploreVerticalNav

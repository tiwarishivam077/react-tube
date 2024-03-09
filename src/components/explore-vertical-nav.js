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
        <div className='w-full h-[380px] mt-12 mb-[100px] -ml-9  text-white flex flex-col'>
       

       <div>
        <p className='text-xl font-extrabold mt-4 ml-10 px-4'>Explore</p>
       </div>

        <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
       
        <div className='px-4'><FiTrendingUp  size={20}/></div>
         <div className='px-4'>Trending</div>
    
        </div>
       <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        <div className='px-4'><HiMiniShoppingBag  size={20}/></div>
         <div className='px-4'>Shopping</div>
    
        </div>
    
       <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        {/* <div className='px-4'><MdSubscriptions /></div> */}
        <div className='px-4'><LuMusic4 size={20} /></div>
         <div className='px-4'>Music</div>
        
        </div>
    
       <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        <div className='px-4'><BiMoviePlay size={20} /></div>
         <div className='px-4'>Movies</div>
        
        </div>

        <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><HiMiniSignal size={20} /></div>
          <div className='px-4'>Live </div>
         
         </div>

         <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><SiYoutubegaming size={20} /></div>
          <div className='px-4'>Gaming </div>
         
         </div>

         <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><RiNewspaperLine size={20} /></div>
          <div className='px-4'>News </div>
         
         </div>

         <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><TfiCup size={20} /></div>
          <div className='px-4'>Sports </div>
         
         </div>
         <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><BsLightbulb size={20} /></div>
          <div className='px-4'>Learning </div>
         
         </div>
         <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><BiLike size={20} /></div>
          <div className='px-4'>Fashion & Beauty </div>
         
         </div>
         <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
         <div className='px-4'><MdOutlinePodcasts size={20} /></div>
          <div className='px-4'>Podcasts </div>
         
         </div>
         

         <div class="flex items-center mt-2 mb-[20px] w-[300px] ml-[10px]">
       <div class="flex-1 border-t-[0.1px] border-gray-200 w-full"></div>
       </div>
    
        </div>
        
         </>
      )
}

export default ExploreVerticalNav

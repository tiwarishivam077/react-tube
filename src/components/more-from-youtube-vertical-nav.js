import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";


const MoreFromYouTube = () => {
    return (
        <>
        <div className='w-full h-[150px] mt-6  -ml-9  text-white flex flex-col'>
       
        <div class="flex items-center my-2">
       <div class="flex-1 border-t-[0.1px] border-gray-200"></div>
       </div>
       
        <div className='py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800  flex'>
        
        {/* <div className='px-2 -ml-3 mr-2 mt-1'><MdHomeFilled /></div> */}
        <div className='px-2 -ml-3 mr-6 mt-1'><SiYoutubestudio  size={20}/></div>
         <div className=''>YouTube Studio</div>
    
        </div>
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        <div className='px-2 -ml-3 mr-6 mt-1'><SiYoutubemusic  size={20}/></div>
         <div className=''>YouTube Music</div>
    
        </div>
    
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        {/* <div className='px-2 -ml-3 mr-6 mt-1'><MdSubscriptions /></div> */}
        <div className='px-2 -ml-3 mr-6 mt-1'><TbBrandYoutubeKids size={20} /></div>
         <div className=''>YouTube Kids</div>
        
        </div>
    
      
        </div>
        
         </>
      )
}

export default MoreFromYouTube
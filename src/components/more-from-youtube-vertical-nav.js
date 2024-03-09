import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";


const MoreFromYouTube = () => {
    return (
        <>
        <div className='w-full h-[220px] mt-10  -ml-9  text-white flex flex-col'>
       

        <div className="w-[300px] mt-8">
        <p className='text-xl font-extrabold mt-4 ml-10 px-4'> More From YouTube</p>
       </div>
        <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
       
        <div className='px-4'><SiYoutubestudio  size={20}/></div>
         <div className='px-4'>YouTube Studio</div>
    
        </div>
       <div className=' mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        <div className='px-4'><SiYoutubemusic  size={20}/></div>
         <div className='px-4'>YouTube Music</div>
    
        </div>
    
       <div className=' mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        {/* <div className='px-4'><MdSubscriptions /></div> */}
        <div className='px-4'><TbBrandYoutubeKids size={20} /></div>
         <div className='px-4'>YouTube Kids</div>
        
        </div>
    
        <div class="flex items-center my-[20px] w-[300px] ml-[10px]">
       <div class="flex-1 border-t-[0.1px] border-gray-200 w-full"></div>
       </div>
      
        </div>
        
         </>
      )
}

export default MoreFromYouTube
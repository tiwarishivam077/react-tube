
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

const Settings = () => {
    return (
        <>
        <div className='w-full h-[175px] mt-6  -ml-9  text-white flex flex-col'>
       
        <div class="flex items-center my-2">
       <div class="flex-1 border-t-[0.1px] border-gray-200"></div>
       </div>
       
        <div className='py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800  flex'>
        
        {/* <div className='px-2 -ml-3 mr-2 mt-1'><MdHomeFilled /></div> */}
        <div className='px-2 -ml-3 mr-6 mt-1'><IoSettingsOutline  size={20}/></div>
         <div className=''>Settings</div>
    
        </div>
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
        <div className='px-2 -ml-3 mr-6 mt-1'><RiFlagLine  size={20}/></div>
         <div className=''>Report History</div>
    
        </div>
    
       <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
       
        <div className='px-2 -ml-3 mr-6 mt-1'><MdHelpOutline size={20} /></div>
         <div className=''>Help</div>
        
        </div>

        <div className=' py-3 px-8 mx-8  text-white text-lg  font-medium bg-opacity-0 whitespace-nowrap  hover:bg-opacity-100 hover:bg-gray-800 border-white border-[0px] rounded-lg flex'>
         
       
         <div className='px-2 -ml-3 mr-6 mt-1'><MdOutlineFeedback size={20} /></div>
          <div className=''>Send Feedback</div>
         
         </div>

        

        
    
      
        </div>
        
         </>
      )
}

export default Settings
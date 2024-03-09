
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

const Settings = () => {
    return (
        <>
        <div className='w-full h-[175px] mt-6  -ml-9  text-white flex flex-col'>
       
       
        <div className='mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
        
        {/* <div className='px-2 -ml-3 mr-2 mt-1'><MdHomeFilled /></div> */}
        <div className='px-4'><IoSettingsOutline  size={20}/></div>
         <div className='px-4'>Settings</div>
    
        </div>
       <div className=' mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
        <div className='px-4'><RiFlagLine  size={20}/></div>
         <div className='px-4'>Report History</div>
    
        </div>
    
       <div className=' mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
       
        <div className='px-4'><MdHelpOutline size={20} /></div>
         <div className='px-4'>Help</div>
        
        </div>

        <div className=' mx-10 mt-1 py-3  w-[210px] text-xl flex rounded-lg hover:bg-gray-800 hover:bg-opacity-100'>
         
       
         <div className='px-4'><MdOutlineFeedback size={20} /></div>
          <div className='px-4'>Send Feedback</div>
         
         </div>

        

        
    
      
        </div>
        
         </>
      )
}

export default Settings
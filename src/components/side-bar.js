
import { youtube_favicon_url } from '../utils/constants';
import { MdOutlineMenu } from "react-icons/md";

const SideBar = () => {
  return (
    <div className=''>
      <div className=' flex justify-evenly fixed ml-8 my-4'>
      
         <div className='w-[20px] -mt-3 text-white mr-6'>
          <MdOutlineMenu size={50}/>
          </div>

   <div className=' h-[90px] -mt-8 ml-8 flex'>
     <img src={youtube_favicon_url } alt='logo' className='rounded-md' />
    </div>

</div>
</div>
   
  )
}

export default SideBar
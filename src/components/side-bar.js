
import { youtube_favicon_url } from '../utils/constants';
import { MdOutlineMenu } from "react-icons/md";
import HomeVerticalNav from './home-vertical-nav';
import YouVerticalNav from './you-vertical-nav';
// import SubscriptionsVerticalNav from './subscriptions-vertical-nav';
import ExploreVerticalNav from './explore-vertical-nav';
import MoreFromYouTube from './more-from-youtube-vertical-nav';
import Settings from './setting-vertical-nav';
import AboutVerticalNav from './about-vertical-nav';

const SideBar = () => {
  return (
    <div className=''>
    <div className='flex flex-col w-1/3 h-full'>

      <div className='flex justify-evenly  -ml-1 my-0  fixed py-4 bg-opacity-100 bg-black w-[250px] h-[60px]'>
      
         <div className='text-white bg-black '>
          <MdOutlineMenu size={25}/>
          </div>

       <div className=' h-[60px] w-[150px] -mt-4 -ml-4 flex'>
        <img src={youtube_favicon_url } alt='logo' className='rounded-md' />
       </div>

      </div>

   <div> <HomeVerticalNav/></div>

   <div> <YouVerticalNav/></div>

   <div><ExploreVerticalNav/></div>
   
   <div> <MoreFromYouTube/></div>

   <div><Settings/></div>

   
   <div><AboutVerticalNav/></div>

</div>

   </div>
  )
}

export default SideBar
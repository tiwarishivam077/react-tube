
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
    <div className='flex flex-col w-full h-full bg-black'>
      <div className=' flex justify-evenly fixed ml-5 my-4 '>
      
         <div className='text-white bg-black mr-3'>
          <MdOutlineMenu size={25}/>
          </div>

       <div className=' h-[60px] w-[250px] -mt-6 ml-2 flex'>
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
   
  )
}

export default SideBar
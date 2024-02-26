import React from 'react'
import VideoCard from './video-card'

const temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

const VideoContainer = () => {

  return (
   
    <div className='flex flex-wrap justify-start py-36'>
    {
      temp.map((el, idx)=><VideoCard key={idx} videoNumber={el+1}/>)
    }
    </div>
   
  )
}

export default VideoContainer
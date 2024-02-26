import React from 'react'
import VideoContainer from './video-container'
import Header from './header'

const MainContainer = () => {
  return (
    <div className=''>
    <div className='w-[100%]'>
    <Header/>
    </div>

    <div className='w-full h-full min-h-screen'>
    <VideoContainer/>
    </div>
    </div>
    
    )
}

export default MainContainer
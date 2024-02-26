import React from 'react'
import SideBar from './side-bar'
import MainContainer from './main-container'

const Body = () => {
  return (
    <div className='flex'>

    <div className='w-[16%]'>
    <SideBar/>
    </div>

    <div className='w-[84%]'>
    <MainContainer/>
    </div>
    
    </div>
  )
}

export default Body
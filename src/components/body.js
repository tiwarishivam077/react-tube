import React from 'react'
import SideBar from './side-bar'
import MainContainer from './main-container'

const Body = () => {
  return (
    <div className='flex'>

    <div className='w-[17%]'>
    <SideBar/>
    </div>

    <div className='w-[83%]'>
    <MainContainer/>
    </div>
    
    </div>
  )
}

export default Body
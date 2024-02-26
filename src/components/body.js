import React from 'react'
import SideBar from './side-bar'
import MainContainer from './main-container'

const Body = () => {
  return (
    <div className='flex flex-row w-full h-screen overflow-scroll"'>

    <div className='w-1/6 h-full overflow-y-auto '>
    <SideBar/>
    </div>

    <div className='w-5/6 flex-1 h-full overflow-y-auto'>
    <MainContainer/>
    </div>
    
    </div>
  )
}

export default Body
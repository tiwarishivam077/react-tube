import React from 'react'

const Button = ({filter, chooseFilter, selectedFilter }) => {


  return (
    <div className=' h-10 '>
    <button 
    className={ filter.id === selectedFilter ?  'py-2 px-3 m-2  text-black text-sm font-bold  bg-white  whitespace-nowrap rounded-md hover:bg-opacity-100' 
               : 'py-2 px-3 m-2  text-white text-sm font-bold  bg-gray-800 bg-opacity-70 whitespace-nowrap rounded-lg hover:bg-opacity-100'}
    onClick={()=>{
      console.log(filter.name)
      chooseFilter(filter.id)
    }
    } >
     {filter.name}</button>
    </div>
  )
}

export default Button 
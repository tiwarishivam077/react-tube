import React, { useState } from 'react'
import Button from './button'

const filters = [
  {
    id:1,
    name:'All',
  },
  {
    id:2,
    name:'Mixes',
  },
  {
    id:3,
    name:'Music',
  },
  {
    id:4,
    name:'Live',
  },
  {
    id:5,
    name:'Bollywood Music',
  },
  {
    id:6,
    name:'News',
  },
  {
    id:7,
    name:'Game shows',
  },
  {
    id:8,
    name:'Mantras',
  },
  {
    id:9,
    name:'Ghazal',
  },
  {
    id:10,
    name:'Debates',
  },
  {
    id:11,
    name:'Classical Musical',
  },
  {
    id:12,
    name:'Television Comedy',
  },
  {
    id:13,
    name:'Computer Programming',
  },
  {
    id:14,
    name:'Podcast',
  },
  {
    id:15,
    name:'Satsang',
  },
  {
    id:16,
    name:'Public Speaking',
  },

  {
    id:17,
    name:'New to you',
  }
]

const ButtonList = () => {
const [filterchosen , setFilterChosen] = useState(null)

  const setFilterbyId =(filterId)=>{
    setFilterChosen(filterId)
console.log(filterchosen, 'filter by useState');
    return filterchosen
  }

  return (
    <div className='overflow-x-auto flex py-1 px-4 w-full -mt-4'>
    {
      filters.map(el=>
      <Button 
      key={el.id}
      filter={el}
      chooseFilter={(filterId)=>{setFilterbyId(filterId)}}
      selectedFilter={filterchosen}
      />)
    }
    
    </div>
  )
}

export default ButtonList
import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
      <RightCard />
      <RightCard />
      <RightCard />
    </div>
  )
}

export default RightContent

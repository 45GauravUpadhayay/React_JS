import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 h-[87vh] gap-10 flex  px-18'>
      <LeftContent />
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content

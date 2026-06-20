import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user = "Vivek" para = "Lorem ipsum dolor sit amet consect" />
      <Card user = "Karan" para = " sit amet consectetur adipisicing elit." />
    </div>
  )
}

export default App
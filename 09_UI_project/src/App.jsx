import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const user = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHdvbWVufGVufDB8fDB8fHww',
      intro: '',
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Underserved',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1663040518652-9bc24a06df88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Underbanked',
    }
  ]

  return (
    <div>
      <Section1 users = {user}/>
      <Section2 />
    </div>
  )
}

export default App

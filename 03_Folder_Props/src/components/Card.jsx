import React from 'react'

const Card = (Props) => {

  console.log(Props.user,Props.age);


  return (
      <div className="card">
        <img src={Props.img}/>
        <h1>{Props.user}</h1>
        <p>{Props.para}</p>
        <button>view profile</button>
      </div>
  )
}

export default Card

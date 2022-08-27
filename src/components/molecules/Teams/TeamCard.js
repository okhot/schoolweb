import React from 'react'
import '../../molecules/Teams/TeamCard.css'

function TeamCard({image, title, position, icon, face, insta, twit}) {
  return (

<div className='teamCard'>
 
   <img src={image} alt='' className='img'/>

    
    <div className='teamcard__description'>
    <h2>{title}</h2>
      <p>{position}</p>
      <img src={face} alt='' />
      <img src={insta} alt='' />
      <img src={twit} alt='' />
    </div>
    </div>


  )
}

export default TeamCard

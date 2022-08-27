import React from 'react'
import '../Testimonials/Testimonies.css'

function Testimonies({image, alt, author, title, testimony}) {
  return (
   <div>
     <div className='testimonycard'>
      <img src={image} alt={alt} className='testimony__image'/>
      <p>{testimony}</p>
      <span class="material-symbols-outlined star" >
        star
      </span>
     <span class="material-symbols-outlined star" >
       star
     </span>
     <span class="material-symbols-outlined star">
       star
     </span>
     <span class="material-symbols-outlined star">
       star
     </span>
     <span class="material-symbols-outlined star">
       star
     </span>
     <h4>{author}</h4>
     <h7>{title}</h7>
    </div>
   </div>
  )
}

export default Testimonies

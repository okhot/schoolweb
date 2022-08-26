import React from 'react'
import '../Courses/CourseCard.css'

function CourseCard({title, download, sale, image, heading, description, price, discount, rating}) {
  return (
    <section className='course'>
        <div className="coursecard"> 
        <div className='coursecard__image'>
         <img src={image} alt='' className='image'/>
         <span className='sale'>{sale}</span>

         <div className='course__icons'>
            <span class="material-symbols-outlined icon">
           favorite
         </span>
        
         <span class="material-symbols-outlined icon">
            shopping_cart
         </span>
         
         <span class="material-symbols-outlined icon">
            visibility
         </span>
         </div>
    
        </div>
        <div className='course__description'>
       
          <div className='card__rating'>
          <span className='heading'>{heading}</span>
         <div className='rating'>
         <span class="material-symbols-outlined star">
            star
          </span>
          <span>{rating}</span>
         </div>
          </div>

          <h4>{title}</h4>
          <p>{description}</p>

      <div className='downloadSect'>
      <span class="material-symbols-outlined downloadbutton">
            download
          </span>
          <span className='download__text'>{download}</span>
      </div>


          <div className='price'>  
          <span className='price1'>{price}</span>
          <span className='discount'>{discount}</span>
          </div>
        <button>
            Learn More
            <span class="material-symbols-outlined">
              chevron_right
            </span>
        </button>
        </div>
        </div>
    </section>
  )
}

export default CourseCard

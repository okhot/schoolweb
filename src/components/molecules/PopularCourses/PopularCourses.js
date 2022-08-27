import React from 'react'
import '../PopularCourses/PopularCourses.css'
import image from '../../../images/popular.png'

function PopularCourses() {
  return (
    <div className='popularcourses'>
      <div className='popular__image'>
        <img src={image} alt='' />
      </div>
      <div className='popular__description'>
        <div className='bar'></div>
        <h2>Our Popular Courses</h2>
        <p>Problems trying to resolve the conflict between <br />
           the two major realms of Classical physics: <br />
           Newtonian mechanics </p>
        <button>
            Learn More
            <span class="material-symbols-outlined">
            chevron_right
            </span>
        </button>
      </div>
    </div>
  )
}

export default PopularCourses

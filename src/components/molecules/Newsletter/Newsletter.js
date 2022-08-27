import React from 'react'
import '../Newsletter/Newsletter.css'

function Newsletter() {
  return (
  <div className='newsletter'>
      <h4>Newsletter</h4>
    <h2>Our Popular Courses</h2>
    <p>    Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics </p>

<div className='subscribe'>
<input  placeholder='Your Email' className='email__bar'></input>
<button className='button'>Subscribe</button>
</div>

  </div>
  )
}

export default Newsletter

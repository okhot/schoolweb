import React from 'react'
import '../FooterSecet/FooterSect.css'

export default function FooterSect({row1, row2, row3, row4, row5, r1, r2, r3, r4, r5}) {
  return (
  <div className='footer'>
    <h5>{row1}</h5>
    <h5>{row2}</h5>
    <h5>{row3}</h5>
    <h5>{row4}</h5>
    <h5>{row5}</h5>

    <div className='getintouch'>
    <h5>{r1}</h5>
    <h5><span class="material-symbols-outlined">
           call
          </span>
         {r2}
       </h5>
    <h5> <span class="material-symbols-outlined">
location_on
</span>{r3}</h5>
    <h5><span class="material-symbols-outlined">
mail
</span>{r4}</h5>
    
    </div>

  </div>
  )
}

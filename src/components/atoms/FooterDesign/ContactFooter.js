import React from 'react'
import '../FooterDesign/ContactFooter.css'

function ContactFooter() {
  return (
    <div className='contactfooter'>
      <h6>Get In Touch</h6>
      <h6>
        <span class="material-symbols-outlined">
             call
        </span>
        (480) 555-0103
      </h6>

      <h6>
        <span class="material-symbols-outlined">
             location_on
        </span>
        4517 Washington Ave. Manchester, <br />
        Kentucky 39495
      </h6>
      
      <h6>
        <span class="material-symbols-outlined">
             mail
        </span>
        debra.holt@example.com
      </h6>
      
    </div>
  )
}

export default ContactFooter

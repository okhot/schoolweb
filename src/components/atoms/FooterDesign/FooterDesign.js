import React from 'react'
import '../../atoms/FooterDesign/FooterDesign.css'

function FooterDesign({title, footerrow1, footerrow2, footerrow3, footerrow4}) {
  return (

          <div className='footertext'>
      <h6>{title}</h6>
      <h6>{footerrow1}</h6>
      <h6>{footerrow2}</h6>
      <h6>{footerrow3}</h6>
      <h6>{footerrow4}</h6>
    </div>
  
  )
}

export default FooterDesign

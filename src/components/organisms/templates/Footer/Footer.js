import React from 'react'
import '../Footer/Footer.css'
import FooterSect from '../../../molecules/FooterSecet/FooterSect'

function Footer() {
  return (
    <section className='footer-container'>

      <FooterSect  
      row1= 'Company Info'
      row2='About Us'
      row3='Carrers'
      row4='We are hiring'
      row5='Blog'
      />

      <FooterSect  
      row1='Company Info'
      row2='About Us'
      row3='Carrers'
      row4='We are hiring'
      row5='Blog'
      />

      <FooterSect  
      row1='Company Info'
      row2='About Us'
      row3='Carrers'
      row4='We are hiring'
      row5='Blog'
      />

      <FooterSect  
      row1='Company Info'
      row2='About Us'
      row3='Carrers'
      row4='We are hiring'
      row5='Blog'
      />

    <div>
    <FooterSect
      r1='Get In Touch'
      r2='(480) 555-0103'
      r3='4517 Washington Ave. Manchester, Kentucky 39495'
      r4='debra.holt@example.com'
      />
     
    </div>
    </section>
  )
}

export default Footer

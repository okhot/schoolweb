import React from 'react'
import '../Footer/Footer.css'
import FooterDesign from '../../../atoms/FooterDesign/FooterDesign'
import ContactFooter from '../../../atoms/FooterDesign/ContactFooter'

function Footer() {
  return (
    <section className='footer'> 
        <FooterDesign 
        title='Company Info'
        footerrow1='About Us'
        footerrow2='carrers'
        footerrow3='We are Hiring'
        footerrow4='Blog'
        />

<FooterDesign 
        title='Legal'
        footerrow1='About Us'
        footerrow2='carrers'
        footerrow3='We are Hiring'
        footerrow4='Blog'
        />

<FooterDesign 
        title='Feature'
        footerrow1='Business Marketing'
        footerrow2='User Analytics'
        footerrow3='Live Chat'
        footerrow4='Unlimited Support'
        />

<FooterDesign 
        title='Resources'
        footerrow1='iOs and Android'
        footerrow2='Watch a demo'
        footerrow3='Customers'
        footerrow4='API'
        />

        <div>
         <ContactFooter />
        </div>
    </section>
  )
}

export default Footer

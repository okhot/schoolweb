import React from 'react'
import '../PartnerLogo/partnerLogo.css'
import aws from '../../../images/aws.png'
import holi from '../../../images/holi.png'
import lyft from '../../../images/lyft.png'
import piedpieper from '../../../images/piedpieper.png'
import reddit from '../../../images/reddit.png'
import stripe from '../../../images/stripe.png'


export default function PartnerLogo() {
  return (
    <div className="partners">
      <div className="partner__logos">
        <img src={holi} alt="holi" />
        <img src={lyft} alt="lyft" />
        <img src={piedpieper} alt="piedpieper" />
        <img src={stripe} alt="stripe" />
        <img src={aws} alt="aws" />
        <img src={reddit} alt="reddit" />
      </div>
    </div>
  )
}

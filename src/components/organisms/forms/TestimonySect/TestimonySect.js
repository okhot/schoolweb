import React from 'react'
import '../TestimonySect/TestimonySect.css'
import Testimonies from '../../../molecules/Testimonials/Testimonies'
import testimony1 from '../../../../images/testimony1.png'
import testimony2 from '../../../../images/testimony2.png'

export default function TestimonySect() {
  return (
  <section className='testimonySect'>

<div className='testimony__info'>
       <h4>Testimonials</h4>
       <h2>Video in Live Action</h2>
       <p>Problems trying to resolve the conflict between <br />
     the two major realms of Classical physics: Newtonian mechanics </p>
     </div>




<div className='testimony'>
      <Testimonies 
    image={testimony1}
    testimony= 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
    author='Regina Miles'
    title='Designer'
    />

<Testimonies 
    image={testimony2}
    testimony= 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
    author='Regina Miles'
    title='Designer'
    />
</div>
  </section>
  )
}

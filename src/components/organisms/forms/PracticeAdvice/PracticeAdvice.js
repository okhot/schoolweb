import React from 'react'
import '../PracticeAdvice/PracticeAdvice.css'
import lib from '../../../../images/lib.svg'
import lib2 from '../../../../images/lib2.svg'
import lib3 from '../../../../images/lib3.svg'
import lib4 from '../../../../images/lib4.svg'
import PracticeCards from '../../../molecules/PracticeCards/PracticeCards'



export default function PracticeAdvice() {
  const cards = [
    {
      image: lib,
      heading: 'Books Library',
      text: 'The gradual accumulation of information about '
    },
    {
      image: lib4,
      heading: 'Books Library',
      text: 'The gradual accumulation of information about ',
      shifted: true
    },
    {
      image: lib3,
      heading: 'Books Library',
      text: 'The gradual accumulation of information about ',
      highlighted: true

    },
    {
      image: lib2,
      heading: 'Books Library',
      text: 'The gradual accumulation of information about ',
      shifted: true
    }
  ];

  
  


  return (
   <section>
    <div className='Practice__text'>
      <h4>Practice Advice</h4>
      <h1>Get Quality Education</h1>
      <p>Problems trying to resolve the conflict between <br />
      the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
    <div className='PracticeAdvice'>
    {cards.map((card, index) => <PracticeCards {...card} />)}
    </div>
   
   </section>
  )
}

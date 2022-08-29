import React from 'react'
import '../TeamSect/TeamSect.css'
import team1 from '../../../../images/team1.png'
import team2 from '../../../../images/team2.png'
import team3 from '../../../../images/team3.png'
import team4 from '../../../../images/team4.png'
import TeamCard from '../../../molecules/Teams/TeamCard'
import face from '../../../../images/facebook.png'
import insta from '../../../../images/insta.png'
import twit from '../../../../images/twitter.png'

export default function TeamSect() {
  return (
   <section className='team__section'>

<div className='team__description'> 
    <h4>Teams</h4>
    <h1>Approdable Packages</h1>
    <p>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics: Newtonian mechanics</p>
</div>

<div className='card'>
<TeamCard 
     image={team1}
     title= 'Julian Jameson'
     position='profession'
     face={face}
     insta={insta}
     twit={twit}
    />

<TeamCard 
     image={team2}
     title= 'Julian Jameson'
     position='profession'
     face={face}
     insta={insta}
     twit={twit}
    />

<TeamCard 
     image={team3}
     title= 'Julian Jameson'
     position='profession'
     face={face}
     insta={insta}
     twit={twit}
    />

<TeamCard 
     image={team4}
     title= 'Julian Jameson'
     position='profession'
     face={face}
     insta={insta}
     twit={twit}
    /></div>
        
   </section>
  )
}

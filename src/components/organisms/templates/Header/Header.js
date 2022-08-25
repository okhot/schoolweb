import React from 'react'
import '../Header/Header.css'
import NavBar from '../NavBar/NavBar'

function Header() {
  return (
    <div className="header">
      <NavBar />
      <div className="header__text">
        <h4>Welcome</h4>
        <h1>25K+ STUDENTS < br/ > TRUST US</h1>
        <p>Find the right instructor for you from <br /> over 10,000 teachers</p>
        <div className="buttons"> 
        <span>Join Us</span>
        <span className="button--learnmore">Learn More</span>
        </div>
      </div>
    </div>
  )
}

export default Header

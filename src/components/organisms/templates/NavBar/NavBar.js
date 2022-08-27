import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'

function NavBar (){
  return (
    <div className='NavBar'>
      <h2>BrandName</h2>
<div className="navbar__links">
      <Link to ='/' className="navbar__link">Home</Link>
      <Link to ='/' className="navbar__link">Products</Link> 
      <Link to ='/' className="navbar__link">Pricing</Link> 
      <Link to ='/' className="navbar__link">Contacts</Link> 
</div>
 <div className="navbar__buttons">
 <button className="login">Login</button>
 <button className="joinus">JOIN US
      <span class="material-symbols-outlined">
       arrow_right_alt
      </span>
      </button>
 </div>
    </div>
  )
}
export default NavBar 

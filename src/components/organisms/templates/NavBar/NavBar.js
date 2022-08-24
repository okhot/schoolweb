import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'

function NavBar (){
  return (
    <div className='NavBar'>
      <h2>BrandName</h2>
      <Link to ='/' className="navBar__links">Home</Link>
      <Link to ='/' className="navBar__links">Products</Link> 
      <Link to ='/' className="navBar__links">Pricing</Link> 
      <Link to ='/' className="navBar__links">Contacts</Link> 
      <button className="login">LogIn</button>
      <button className="signin">SignIn</button>
    </div>
  )
}
export default NavBar 

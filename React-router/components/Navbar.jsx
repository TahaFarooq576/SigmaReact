import React from 'react'
import { Link , NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact us</li></Link>
        <Link to="/others"><li>Others</li></Link>
      </nav>
    </div>
  )
}

export default Navbar

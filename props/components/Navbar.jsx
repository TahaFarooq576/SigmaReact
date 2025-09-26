import React from 'react'
import Main from './Main'
function Navbar({count}) {
  return (
    <div>
      I am Navbar
      <Main count= {count}/>
    </div>
  )
}

export default Navbar

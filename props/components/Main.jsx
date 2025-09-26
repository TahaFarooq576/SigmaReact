import React from 'react'
import Footer from './footer'
function Main({count}) {
  return (
    <div>
      I am main
      <Footer count={count}/>
    </div>
  )
}

export default Main

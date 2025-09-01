import { useEffect } from "react"
import React  from 'react'

function Navbar({color}) {

    useEffect(() => {
      
        alert("I am bydefault rendring of componment")
    })
    useEffect(() => {
      alert("I am here beacuse component is rendring!")
    }, [])
    useEffect(() => {
       alert("Componet color is changed!")
    }, [color])
  return (
    <div>
      I am a navbar of color {color}.Thanks!
    </div>
  )
}

export default Navbar

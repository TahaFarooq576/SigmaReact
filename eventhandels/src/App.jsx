import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const handleclick = ()=>{
  alert ("I am clicked")
}


const handlemouse = ()=>{
  alert("mouse is entered in paragraph")
}

const handlemouseleave = ()=>{
  alert("mouse is leaved")
}

  return (
    <>
     <button onClick={handleclick}>Show alert message</button>
     <p onMouseEnter={handlemouse} onMouseLeave={handlemouseleave} style={{backgroundColor:"red"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quod nihil sunt minima atque mollitia est vitae, deleniti ad voluptatem.</p>
    </>
  )
}

export default App

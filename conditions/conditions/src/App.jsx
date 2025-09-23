import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

 const [list, setlist] = useState([{
  name:"taha",
  age:"20",
  class:"BSCS"
 },
 {
  name:"tayyab",
  age:"19",
  class:"intermediate"
 },


])
  const [btn, showbtn] = useState(true)

  return (
    <>
      {btn? <button style={{backgroundColor:'pink'}} onMouseMove={()=>{setCount(count*2)}}>I am here {count} </button> : <button>I am false </button>}
      <ul>
        {list.map(item => (
          <li key={item.id} style={{ margin: '6px 0' }}>
            <strong>Name:</strong> {item.name}, <strong>Age:</strong> {item.age}, <strong>Class:</strong> {item.class}
          </li>
        ))}
      </ul>   
    </>
  )
}

export default App

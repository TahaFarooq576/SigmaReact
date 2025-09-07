import { useState , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [number , setnumber] = useState(1)

  let ref=useRef()


  useEffect(() => {
    alert("Number is multiply by 2 hence thetre is effect occur in your code!");
  }, [number])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button ref={ref} onClick={()=>{setnumber(number*2)
        ref.current.style.display="none"
      }}>React counter {number}</button>

      <button className='check' ref={ref} onClick={()=>{ref.current.style.display="none"}}>Remove previous button</button>
    </>
  )
}

export default App

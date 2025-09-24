import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [name, setname] = useState("taha")


const [form, setForm] = useState({ email: "", phone: "" });
   const handlechange=(e =>{
        
          setForm({ ...form,[e.target.name]: e.target.value });
          console.log(form)

   })









   const [forum, setforum] = useState({email:"",phone:"",class:"",roll:""})
   const handelchange=(e =>{
    // alert("something is being written")
    setforum({...forum,[e.target.name]:e.target.value})
   })
  return (
    <>
     <input type="text" name='email' value={form.email} onChange={handlechange} />
     <input type="text" name='phone' value={form.phone} onChange={handlechange}/>





      <div style={{display:"flex", flexDirection: 'column', gap:"30px"}}>
        <div><label htmlFor="">Enter Email</label>
     <input type="email" name='email' value={forum.email?forum.email:""} onChange={handelchange}/></div>
      
     <div><label htmlFor="">Enter phone no</label>
      <input type="phone" name='phone' value={forum.phone?forum.phone:""} onChange={handelchange}/></div>
     <div> <label htmlFor="">Enter Class</label>
       <input type="text" name='class' value={forum.class?forum.class:""} onChange={handelchange}/></div>
       <div><label htmlFor="">Enter Roll Number</label>
        <input type="number" name='roll' value={forum.roll?forum.roll:""} onChange={handelchange}/></div>
        </div>
    </>
  )
}

export default App

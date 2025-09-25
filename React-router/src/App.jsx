import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Login from '../components/Login'
import Contact from '../components/Contact'

import {createBrowserRouter,  RouterProvider,} from "react-router-dom";
function App() {
 const router = createBrowserRouter([
  {
     path:"/",
    element:<><Navbar/><Home/></>
  },
  {
     path:"/about",
    element:<><Navbar/><Login/></>
  },
  {
     path:"/contact",
    element:<><Navbar/><Contact/></>
  }
 ])

  return (
    <>
    
     <RouterProvider router={router}/>
     <h1>Hello World</h1>
    </>
  )
}

export default App

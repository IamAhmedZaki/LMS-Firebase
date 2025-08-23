import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Dashboard from './Screens/Dashboard'
function App() {
  

  return (
    <>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
      
    </>
  )
}

export default App

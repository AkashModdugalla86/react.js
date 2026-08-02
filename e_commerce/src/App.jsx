import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Productdetails from './pages/Productdetails'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/productdetails/:id' element={<Productdetails/>}></Route>
    </Routes>
    </>
  )
}

export default App

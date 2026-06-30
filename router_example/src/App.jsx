import React from 'react'
import Home from './pages/home'
import Login from './pages/login'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
     <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App

import React, { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  const[login,showlogin]=useState(false)
  function setlogin(){
    showlogin(true)
  }
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/* {showlogin && <Login setlogin={setlogin}/>} */}
    </>
  )
}

export default App

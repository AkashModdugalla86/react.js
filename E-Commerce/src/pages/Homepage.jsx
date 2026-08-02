import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Homepage = () => {
  const navigate = useNavigate()
  return (
    <>
    <Navbar/>
      <div className="container">
        <button id='signup-btn' onClick={()=>{navigate("/signup")}}>Signup</button>
        
        <button id='login-btn' onClick={()=>{navigate("/login")}}>Login</button>
      </div>
    </>
  )
}

export default Homepage
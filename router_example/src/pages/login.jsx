import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import {toast,ToastContainer} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
const Login = (props) => {

  const navigate=useNavigate()

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  function login(){
    if(username==="akash"&& password==="8240"){
      toast.success("login successfully..!")
      setTimeout(()=>{
        window.open("https:www.youtube.com")
      },3000)
    }
    else{
      toast.error("invalid credentials..!")
    }
  }

  function cancel(){
    navigate('/')
  }
  return (
    <>
    <Navbar/><br />

    <div className="login">

      <center><h1 >Login Page</h1> <br />
    <input type="text" placeholder='enter your username' id="username" value={username} 
    onChange={(e)=>setUsername(e.target.value)} /><br /><br />
    <input type="text" placeholder='enter your password' value={password}
    onChange={(e)=>setPassword(e.target.value)}/><br /><br />

    <button id='loginbt' onClick={login} >login</button>

    <button id="cancel" onClick={cancel}
    >cancel</button>

    <ToastContainer theme="light" autoClose={1000}/>
    
    </center>
    </div>
    
    </>
  )
}

export default Login

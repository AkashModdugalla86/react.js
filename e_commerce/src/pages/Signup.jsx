import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
const Signup = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [mobile,setMobile]=useState("")
  const [password,setPassword]=useState("")

  function signup(e){
    e.preventDefault()
    const data={name,email,mobile,password}
    axios.post("http://localhost:4000/users",data)
    .then(()=>{
      toast.success("Signup success...")
      setName("")
      setEmail("")
      setMobile("")
      setPassword("")
    })
    .catch(err=>toast.error("failed to signup"))
  }
  return (
    <>
    <Navbar/>
        <div className="signup-form">
        <form onSubmit={signup}>
         <center><h2>Signup</h2>
         <input type="text" placeholder='enter username' required value={name}onChange={(e)=>setName(e.target.value)}/><br />
         <input type="text" placeholder='enter email' required value={email}onChange={(e)=>setEmail(e.target.value)}/><br />
         <input type="text" placeholder='enter mobile no.' required value={mobile}onChange={(e)=>setMobile(e.target.value)}/><br />
         <input type="password" placeholder='enter password' required value={password}onChange={(e)=>setPassword(e.target.value)}/><br />
         <button id='signup'>Signup</button>
         <p>Are you existing urser ?<Link to={"/login"}>Login</Link> </p>
         </center>
        </form>
        </div>
    </>
  )
}

export default Signup

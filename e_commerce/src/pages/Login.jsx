import React,{useState} from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
    function login(e){
      e.preventDefault()
      axios.get("http://localhost:4000/users")
      .then(x=>{
        let users = x.data
        let result = users.find((x)=>{
          return (x.email===email && x.password===password)
        })
        if(result){
          toast.success("Done")
          localStorage.setItem("userId",result.id)
          localStorage.setItem("isLoggedIn",true)
          localStorage.setItem("username",result.name)
          navigate("/dashboard")
        }else{
          toast.error("Failed")
        }
      })
      .catch(err=>toast.error("failed"))
    }
   
  return (
    <>
      <div className='login-form'>
       <center><form onSubmit={login}>
          <h2>Login page</h2>
          <input 
          type="text" 
          placeholder='Enter email' 
          required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> <br />

          <input 
          type="password" 
          placeholder='Enter password' 
          required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          /> <br />

          <button id='login'>Login</button>
          <p style={{textAlign:"center"}}>New User? <Link to={"/signup"}>Signup</Link></p>
        </form></center> 
      </div>
    </>
  )
}

export default Login
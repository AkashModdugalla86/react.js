import React,{useState} from 'react'
import Signup from './pages/SignUp'
const App = () => {
  const [showSignup,setShowSignup]=useState(false)
  function open(){
    setShowSignup(true)
  }
  return (
    <>
      <center><h1>Welcome to our website</h1>
      <button >Login</button>
      <button onClick={open}>signup</button></center>
      {showSignup && <Signup  setShowSignup={setShowSignup}/> }
    </>
  )
}

export default App

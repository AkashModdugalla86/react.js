import React,{useState} from 'react'
import Signup from './pages/SignUp'
import SignIn from './pages/SignIn'
const App = () => {
  const [showSignup,setShowSignup]=useState(false)
  function open(){
    setShowSignup(true)
  }
    const [showSignin,setSignin]=useState(false)
  function openlogin(){
    setSignin(true)
    
  }
  return (
    <>
      <center><h1>Welcome to our website</h1>
      <button onClick={openlogin}>Signin</button>
      <button onClick={open}>signup</button></center>
      {showSignup && <Signup  setShowSignup={setShowSignup}/> }
      { showSignin&& <SignIn setSignin={setSignin} />}

     
     
    </>
  )
}

export default App




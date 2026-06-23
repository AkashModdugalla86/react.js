import React from "react";

const Login=(props)=>{

    function close(){
        props.setShowLogin(false)  
    }
  return (

    <>
    <div className="overlay">
      <div className="modal">
        <h1>SignUp Page</h1>
        <input type="text"placeholder="Enter your username" /> <br /><br />
        <input type="text" placeholder="Enter your email" /><br /><br />
        <input type="text" placeholder="Enter your mobile no." /><br /><br />
        <input type="text"placeholder="Enter your password" /><br /><br />
        <button>Login</button>
        <button onClick={close}>Cancel</button>

      </div>
    </div>
    </>
  )
}
export default Signup
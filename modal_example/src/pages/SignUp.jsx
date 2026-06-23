import React from "react";

const Signup=(props)=>{

    function close(){
        props.setShowSignup(false)  
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
        <button>SignUp</button>
        <button onClick={close}>Cancel</button>

      </div>
    </div>
    </>
  )
}
export default Signup
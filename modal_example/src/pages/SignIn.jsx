import React from 'react'

const SignIn = (props) => {
     function close(){
        props.setSignin(false)  
    }
  return (
   <>
   <div className="overlay">
      <div className="modal">
        <h1>SignIn Page</h1>
        <input type="text"placeholder="Enter your username" /> <br /><br />
        {/* <input type="text" placeholder="Enter your email" /><br /><br /> */}
        {/* <input type="text" placeholder="Enter your mobile no." /><br /><br /> */}
        <input type="text"placeholder="Enter your password" /><br /><br />
        <button >SignIn</button>
        <button onClick={close}>Cancel</button>

      </div>
    </div>
   </>
  )
}

export default SignIn


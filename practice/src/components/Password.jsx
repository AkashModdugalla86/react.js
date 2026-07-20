// import React, { useState } from "react";

// function Password() {
//   // State to store the password text
//   const [password, setPassword] = useState("");
  
//   // State to track if the password should be visible
//   const [showPassword, setShowPassword] = useState(false);

//   // Function to handle checkbox state change
//   const handleCheckboxChange = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <div className="password">
//       <h3>React Show/Hide Password Example</h3>
      
//       {/* Password Input Field */}
//       <div>
//         <input
//           type={showPassword ? "text" : "password"} 
//           placeholder="Enter your password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       {/* Checkbox Trigger */}
//       <div>
//           <input
//             type="checkbox"
//             checked={showPassword}
//             onChange={handleCheckboxChange}
//           />
//           Show Password
//       </div>
//     </div>
//   );
// }

// export default Password

import React, { useState } from 'react'

const Password = () => {
  const[show,setShow]=useState(false)
  return (
    <div className='password'>
      <br />
      
      <input type={show?"text":"password"}placeholder='enter your password' />
      <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
      <br />
    </div>
  )
}

export default Password


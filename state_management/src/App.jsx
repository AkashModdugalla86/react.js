import React from "react";
import { useState } from "react";
const App =()=>{

  const [show,setshow]=useState(false)
  
   function toggle(){
    setshow(!show)

   }
  
   return(
    <>
    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWHBwMiMx5ciSeV-QD2N7z3YMXbMwgkUga0K3UQTF4LNhoK_snbjhFpZNQQ2EYD_D4x4DL81XH9VWTFRMzD0fvkycAvOjoue6JITm8sMwbnhild-DXOXBoEg" alt=""height={"200px"} />
    <h2>Apple iPhone 16 pro</h2>
    <p><b>Price: </b>86000/-</p>
    <p><b>Ratings: </b>⭐⭐⭐⭐</p>
    <button onClick={toggle} >
      {show?"show less":"show more"}
    </button>
    {show && <div>
      <h2>Specification</h2>
      <p><b>Storage:</b> 8GB and 256GB</p>
      <p><b>Processor:</b> Snapdragon</p>
      <p><b>Camera:</b> 50MP</p>
      <p><b>Battery:</b> 5000mah</p>
      <p><b>Size:</b> 6.7inch x 13cm XDR Display</p>
    </div> }
    </>
   )
}
export default App
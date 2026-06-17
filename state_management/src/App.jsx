import React from "react";
import { useState } from "react";
const App =()=>{
  const [count,setCount]=useState(0)
  const [name,setname]=useState("akash")
  const [state,setState]=useState(false)
   function inc(){
    setCount(count+1)
   }
   function dec(){
    if (count>0){
      setCount(count-1)
    }
   }
   function reset(){
    setCount(0)
   }
   function namechange(){
    setname("aaku")
   }
   let message;
   if (state){
    message=<h1>welcome to home page</h1>
   }else{
    message=<h1>please login</h1>
   }
   function toggle(){
    setState(!state)

   }
   return(
    <>
    <h1>{count}</h1>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>Decrement</button>
    <button onClick={reset}>Reset</button><br />
    <h1>{name}</h1>
    <button onClick={namechange} >Change</button>
    <h1>{message}</h1>
    <button onClick={toggle}>click</button>
    </>
   )
}
export default App
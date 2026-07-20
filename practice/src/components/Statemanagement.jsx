import React, { use } from 'react'
import { useState } from 'react'
import './app.css'
const Statemanagement = () => {
    const[state,setState]=useState(0)

  return (
    <div className='counter'>
      <h1>{state} </h1>
      <button onClick={()=>setState(state+1) }>Increment</button> 
      <button onClick={()=>setState(state => state > 0 ? state-1:0)}>Decrement</button> 
      <button onClick={()=>setState(0)}>Reset</button> 
    </div>
  )
}

export default Statemanagement

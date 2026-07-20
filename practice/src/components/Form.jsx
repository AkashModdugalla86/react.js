import React, { useState } from 'react'

const Form = () => {
    const[name,setName]=useState("");
  return (
    <div>
        <br />
      <input type='text'
      value={name} 
      onChange={(e)=>setName(e.target.value)}/>
      <h1>hello {name}</h1>
    </div>
  )
}

export default Form

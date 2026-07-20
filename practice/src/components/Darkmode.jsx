import React, { useState } from 'react'

const Darkmode = () => {
  const[dark,settheme]=useState(false)

  return (
    <div className='darktheme'>
      <h1 style={{
        background:dark? "white":"black",
        color:dark?"black":"yellow"
      }
      }>hello</h1>
      <button onClick={()=>settheme(!dark)}>Toggle theme</button>
    </div>
  )
}

export default Darkmode

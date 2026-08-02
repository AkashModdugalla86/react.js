import React, { useState } from 'react'

const Controlled = () => {
    const [name,setName]=useState("")

    function handleSubmit(e){
        e.preventDefault(e)
        console.log(name)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
      value={name}
      onChange={(e)=> setName(e.target.value)} />
      <button>submit</button>
      </form>
      
    </>
  )
}

export default Controlled

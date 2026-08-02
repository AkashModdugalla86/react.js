import React,{useRef, useState} from 'react'

const Uncontrolled = () => {
 const inputRef=useRef()
 const [display,setDisplay]=useState("")
 function handleSubmit(e){
    e.preventDefault()
    console.log(inputRef.current.value)
 }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type="text" ref={inputRef}/>
        <button >submit 2</button>
      </form>
    </>
  )
}

export default Uncontrolled

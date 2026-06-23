import React,{useState} from 'react'

const Dummy = () => {
    const[show,setstate]=useState("akash")
    function change(show){
        setstate("aaku")
    }
  return (
   <>
   <h1>{show}</h1>
    <button onClick={change}>change</button>
    </>
  )
}

export default Dummy

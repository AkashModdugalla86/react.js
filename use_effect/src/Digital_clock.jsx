import React,{useState,useEffect} from 'react'

const Digital_clock = () => {
  const [time,setTime]=useState(new Date())
  useEffect(()=>{
    const timer=setInterval(()=>{
      setTime(new Date())
    },1000)
    return ()=> clearInterval(timer)
  },[])
  
  return (
    <>
      <h1>{time.toLocaleDateString()}</h1>
    </>
  )
}

export default Digital_clock

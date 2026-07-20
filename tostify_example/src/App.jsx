import React,{useState} from 'react'
import {toast,ToastContainer } from 'react-toastify'
const App = () => {
  function toastExample(){
    toast.success("login success")
  }
  return (
    <div>
      <button onClick={toastExample}>click</button>
      <ToastContainer theme ="light" autoClose={1000}/>
    </div>
  )
}

export default App

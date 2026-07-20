import React from 'react'
import Statemanagement from './components/Statemanagement'
import { useState } from 'react'
import Password from './components/Password'
import Darkmode from './components/Darkmode'
import Form from './components/Form'
const App = () => {
  const [name,setName]=useState(false)
  function toggle(){
    setName(!name)
  }
  return (
    <>
    <center>
      <h1>{name?"AKASH":"akash"} </h1>
    <button onClick={toggle}>click me</button>
      <Statemanagement/>
      <Password/>
      <Darkmode/>
      <Form/>
    </center>
      
    </>
  )
}

export default App

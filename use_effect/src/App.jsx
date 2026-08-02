import React, { useEffect,useState } from 'react'
import Digital_clock from './Digital_clock'
import Usememo from './Usememo'
const App = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(x=>x.json())
        .then(y=>setUsers(y))
        .catch(user=>console.log(user))

    },[])
  return (
    <>
    <Usememo/>
    <Digital_clock/>
     <center><h1><u>users</u></h1></center>
     {users.map((x)=>{
        return <div key={x.id} >
            <p>{x.id}.{x.login} </p>
        <img src={x.avatar_url} alt={x.login} height={"200px"}/> <br /><br />
        </div>
     })}
    </>
  )
}

export default App

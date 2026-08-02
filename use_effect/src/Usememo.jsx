// import React,{useState,useMemo} from 'react'

// const Usememo = () => {
//     const [count,secount]=useState(0)

//     function slowFunction(){
//         console.log("calculating....!");
//     let total=0
//     for (let i=0; i < 10000000; i++){
//         total+=i

//     }
//     return total
//     }

//   return (
//     <>
//       <h1>{count} </h1>

//       <button onClick={()=>secount(count+1)}> increment</button>
//     <h2>{slowFunction()} </h2>
//     </>
//   )
// }

// export default Usememo


import React,{useState,useMemo} from 'react'

const Usememo = () => {
    const [count,setcount]=useState(0)
    const [user,setuser]=useState("")

    function inc(){
        setcount(count+1)
    }
    function square(n){
        console.log("calculating")
        return n*n
    }
    //with useMemo
    let result=useMemo(()=>{ return square(count)},[count])

  return (
    <>
      <h1>square of {count} is {result}</h1>
      <button onClick={inc}>Click</button> <br /><br />
      <input type="text" value={user} onChange={(e)=>{ setuser(e.target.value)}} />
    </>
  )
}

export default Usememo

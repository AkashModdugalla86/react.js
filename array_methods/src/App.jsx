import React from "react";
React
const App=()=>{
  // let num=[10,20,30,50]
  // let result=num.reduce((x,y)=>{
  //   return x+y
  // },0)
  // return (
  //   <>
  //   <h1>{result}</h1>
  //   </>
  // )

  let num =[10,30,20,70]
  let result=num.filter((x)=>{
      return x>5
  })
  return (
    <>
    <h1>{result}</h1></>
  )
}
export default App
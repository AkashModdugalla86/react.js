import React from "react";
import Userdata from "./pages/UserData";
const App=()=>{
    let username="Akash"
    let age=22
    let skills=["html","css","js"]
    let college="RUCE"
    let Address={
        city:"bengaluru"
    }
    function greet(){
        return "welcome"
    }
    function greet_2(){
        return "welcome to new one"
    }
    return(
        <>
        <Userdata
        a={username}
        age={age}
        skills={skills.join(", ")}
        college={college}
        Address={Address}
        greet={greet}
        greet2={greet_2}
        />
        </>
    )
}
export default App
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
    return(
        <>
        <Userdata
        a={username}
        age={age}
        skills={skills.join(", ")}
        college={college}
        Address={Address}
        greet={greet}
        />
        </>
    )
}
export default App
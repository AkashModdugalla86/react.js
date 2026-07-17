import React from "react";
const Userdata=(props)=>{
    return(
        <>
           <div className="student">
                <h1>name:{props.a}</h1>
                <h1>age:{props.age} </h1>
                <h1>skills:{props.skills} </h1>
                <h1>college:{props.college} </h1>
                <h1>Address:{props.Address.city} </h1>
                <h1>function :{props.greet()} </h1>
                <h1>function2:{props.greet2()} </h1>
           </div>
        </>
    )
}
export default Userdata
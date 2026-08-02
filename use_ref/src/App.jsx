import React,{useState,useRef} from "react";
import Controlled from "./componets/Controlled";
import Uncontrolled from "./componets/Uncontrolled";

function App() {

  return (
    <>
    <input type="text"/>
    <button>sub</button>
      <Controlled/>
      <Uncontrolled/>
    </>
  );
} 
export default App
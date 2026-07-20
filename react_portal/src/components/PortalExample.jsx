import React from 'react'
import ReactDOM from 'react-dom'

const PortalExample = (props) => {
    return ReactDOM.createPortal(
      <div
      style={{
        position:'fixed',
        right:'20px',
        top:'20px',
        backgroundColor:'green',
        color:'white',
        padding:'3px'
        }}>
        <h1>{props.a}</h1>
        
      </div>,
      document.getElementById("portal")
    )
   

}

export default PortalExample

import React from 'react'
import { Link } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
const Navbar = () => {
  return (
    <>
     <div className="nav">
        <div className="left">
        <h1>Logo</h1>
        </div>
        <div className="right">
            <Link to={"/"}><h1 >Home</h1></Link>
            <Link to={"/login"}><h1>login</h1></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar

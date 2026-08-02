import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
            <img src="./logo.jpg" alt="" height={"100px"} />
        </div>
        <div className="right">
            <h2><Link to="/login" className='login_link'>login</Link></h2>
            <h2>orders</h2>
        </div>
      </div>
    </>
  )
}

export default Navbar

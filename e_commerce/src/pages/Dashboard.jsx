import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  let username= localStorage.getItem("username")
  const [products,setProducts]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:4000/products")
    .then(x=>setProducts(x.data))
    .catch(err=>console.log(err))
  },[])

  function handleProduct(id){
    navigate(`/productdetails/${id}`)
  }
  return (
    <>
      <Navbar/>
      <center><h1>Welcome {username}</h1></center>
      <div className="product_container">
      {products.map((x)=>{
        return <div className="product">
          <img src={x.product_image} alt="" height={"200px"} />
          <h3>{x.product_name} </h3>
          <button id="view-btn" onClick={()=>handleProduct(x.id)}>View</button>
        </div>
      })}
      </div>
    </>
  )
}

export default Dashboard

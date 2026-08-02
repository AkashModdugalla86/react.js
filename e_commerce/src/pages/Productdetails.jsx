import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Productdetails = () => {
  let {id}=useParams()
  const[product,setProduct]=useState({})
  const [name,setName] =useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [quantity, setQuantity] = useState(1)
  axios.get(`http://localhost:4000/products/${id}/`)
  .then(x=> setProduct(x.data))
  .catch(err=>console.log(err))

  function inc(){
    setQuantity(quantity+1)
  }
  function dec(){
    if (quantity<1){
      setQuantity(quantity-1)}
    
  }

  return (
    <>
      <Navbar/>
      <center><h1>{product.product_name}</h1></center>
      <img src={product.product_image} alt="" height={"300px"}/>
      <h3>Price:{product.product_price} </h3>
      <p><b>Specification:</b>{product.product_description} </p>
      <p><b>Ratings:</b>⭐⭐⭐⭐{product.product_ratings} /5</p>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
       <h2>{quantity}</h2>
      <button>Order</button>

    </>
  )
}

export default Productdetails

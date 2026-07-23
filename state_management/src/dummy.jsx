
import React, { useState } from 'react'

const dummy = () => {
  const[category,setCategory]=useState("")
  const[products,setProducts]=useState("")
  let items=[
    {id:1,name :"Boat Speaker",Image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSucrGRq-Px-3YIGTtQrXg4zjveeB2hkeHSV8mmbOXCkgPHX6fKU06hJYcyyEfoCY3P43cMaGJMiiZ9tUtAlHPqlYYbqa7S2H9aMJzybivk1SPU3-BBvu6ryg",category:"electronics" },
    {id:2,name :"Nokia 1100",Image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnrmuLk02dWO2vFIHL_Vlc385tN9ZreQHfAST5XLICBusHjRnsipNhrd8RrYSgBmejKDZKpCny7sl4ykNJ5BrZJSD6s70YOOYGumfeEWcXHOS2ljYT2wU8cA",category:"electronics" },
    {id:3,name :"T shirt",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZZ9eEagngu3T7VDJx9gzIwGHs1Vjq-oWAo3iu9aquw&s=10",category:"Fashion" },
    {id:4,name :"over sized",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRLKUbI5OZ8j4IkgMgAp3KKztFpR5tknIGcu1pS11oQ&s=10",category:"Fashion" },
    {id:5,name :"Gold winner sunflower oil",Image:"https://rukminim2.flixcart.com/image/612/612/xif0q/edible-oil/z/0/h/-original-imah7mywdmzhkybz.jpeg?q=70",category:"Groceries" },
    {id:6,name :"Fragrance",Image:"https://rukminim2.flixcart.com/fk-p-flap/200/240/image/b00c1ab4b43be0bc.jpg?q=60",category:"Groceries" }
  ]

  let result= items.filter((x)=>{
    return x.category===category
  })
  let result2= items.filter((y)=>{
    return y.name.toLowerCase().includes(products.toLowerCase())
  })

  return (
    <>
    <div className="navbar">
      <div id='logo'></div>
      <input type="text" placeholder='enter your products' 
      value={products} onChange={(e)=>setProducts(e.target.value)}/><br />
      {products==""? (<p></p>):
      result2.length>0?(
        <ol>
          {result2.map((x)=>{
            return <li> 
            <img src={x.Image} alt="" height={"200px"}/>{x.name} </li>
          })}
        </ol>
      ):(<p>No products Found</p> ) }
    </div>
    
    <div className="products">
      <button onClick={()=>{setCategory("electronics")}}>Electronics</button>
    <button onClick={()=>{setCategory("Fashion")}}>Fashion</button>
    <button onClick={()=>{setCategory("Groceries")}}>Gloceries</button>
    {category === ""? (<p></p>):(
      result.length>0?(
        result.map((x)=>{
          return <div>
            <h2>{x.name} </h2>
            <img src={x.Image} alt="" height={"200px"} />
          </div>
        })
      ): <p>no results found</p>
     )}
    </div>
    </>
  )
}

export default dummy

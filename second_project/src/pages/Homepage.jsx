import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Homepage =()=>{
    return(
        <>
        <Navbar/>
       
        <div className="hero-section">
       <h1>Welcome to our site</h1>
        <button>shop now</button>

        </div>
        <center><h1>Products</h1></center>
        <div className="products">
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQaDKWzzw4YXLvkqaBimKC4IyP0i2Fq9C3k8FD6pNjm4tqsNR1vk53WHzPrxPdROWRUfkq_eevqZjW3Ie8KwQ7o2c2QIo9qiBk89dhwL9Pq0UdboBORotOoIus" alt="Mobile phone" />
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYTpclNn1YH85I3ja0RIPQPYdXRlgOgUOPzwuKD8CtbHPz1Z1yew_vkmWIIFRVJjrbBiiQJqi7z7oTtBR-dpoY0_0OPzJorC53SVipLaMuv70qpi_W1kgN_Q" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSffooEZfOJHtflacRJ5ZkEAEwIjmVUwc9OU9Oy1fEb-9fFJR_fOhPXqfnpGcg0-ty5kFnNMwijMRjAzrWDl5-mqJJYEjB_LQwG-VKqqyazrM7uCnBn_OYoJXk" alt="" />
        </div>
            <div className="products">
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2cL_TxtBl3Zf_XDIJ-UsyjOAjr7WR0wHsdrC0vrYcs-Fyuj3AnPP9bBY68hR4WfTVERVHqRw-Uqpmm23rB_kWPPNhnUrbtOwrmDm0sjRXurHWV7tkp3N6hg" alt="" />
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_LHaewdm7Nop_yPX2AJd1KJkw6dX4SMlIkhI5W52TGn3Mze3bC6HUos635xuFXxKjFU8AwkOzEsMSHbJhBOqPLlsLgGjFBN9Q1vlLmKNmnY8RIP-9WoTasA" alt="" />
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStJas4gv7lvumGbH9mGN9Yux15oIHEbRFfgWx7LYYDynda_Tmfj33aZKiqskAblrnzuohXTiH8zEJWAfcVrkMYY1GBEffs1tAWhSEUDRcwk7NFKHwZxM2W" alt="" />
        </div>
        <Footer/>
        </>
    )
}
export default Homepage
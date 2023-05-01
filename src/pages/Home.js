import React from 'react'
import {Link} from "react-router-dom"
import pizza from "../assets/pizza.jpeg"
import "../styles/Home.css"
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${pizza})`}}>
      <div className='headerContainer' >
        <h1>Domingo Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
           <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import BannerImage from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"
function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
            Domingos Pizza is an amazingly popular food around the world consisting typically of a flattened bread dough 
            spread with a savory mix of ingredients including tomato sauce and cheese, along with other toppings. 
            Pizza is a very festive dish that is best shared amongst loved ones. It is perfect for every occasions, 
            be in the business lunch delivery, the kids birthday celebration in the restaurant or the perfect date night spot. 
            Domino's Pizza is the leading pizza restaurant in Nigeria providing exceptional Pizza delivery and dine in service.
            Domino's Pizzza (region)Domino's Pizza served over 500 million pizzas last year worldwide. 
            Our delivery people drive more than 10 million miles every week to bring you the best pizza we can make. 
            We operate over 11,000 pizza places in more than 80 countries dedicated to providing great tasting pizza 
            for carryout or delivered to your door. 

        </p>
      </div>
      
    </div>
  )
}

export default About

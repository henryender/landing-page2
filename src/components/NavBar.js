import React,{useState} from 'react'
import pizzaLogo from "../assets/pizzaLogo.png"
import {Link, Outlet} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import  "../styles/Navbar.css";


function NavBar() {
  const [openLinks,setopenLinks]=useState(false);
  function Handlelinks(){
    setopenLinks(!openLinks)
  }
  
  return (
    <div className='navbar'>

        <div className='leftSide' id= {openLinks? "open":"close"}>
            <img src={pizzaLogo}  alt={''}/>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link> 
            <Link to="/menu">Menu</Link> 
            <Link to="/about">About</Link> 
            <Link to="/contact">Contact</Link> 
            <Outlet/>
            </div>
        </div>

        <div className='rightSide'>
            <Link to="/">Home</Link> 
            <Link to="/menu">Menu</Link> 
            <Link to="/about">About</Link> 
            <Link to="/contact">Contact</Link> 
            <Outlet/>
            <button onClick={Handlelinks}>
              <ReorderIcon/>
            </button>
        </div> 
        
    </div>
  )
}

export default NavBar

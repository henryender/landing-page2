import React from "react"
import './App.css';
import NavBar from "./components/NavBar"
import Home from  "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoPage  from "./pages/NoPage"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<NoPage/>}/> 
        </Routes>
          <Footer/>
      </BrowserRouter>
       
       
    </div>
  );
}

export default App;

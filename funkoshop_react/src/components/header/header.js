import React from 'react';
import "../header/headerStyle.css"
import {Link} from "react-router-dom"

let Header = function(){
return (
    <div id="content">
    <header>
      <div id="pruebaflex">
      <Link to="/"><img className="logo" src="/images/LOGO2.png" alt='LOGO'/></Link>
     
      <span className="logosder">
         <Link to="/users"><i className="fas fa-user" id="usercarrito"></i></Link><br/>
         <Link to="/products"><i className="fas fa-shopping-cart" id="usercarrito"></i></Link>
      </span>
   </div>
         </header>
     </div>
)}


export default Header
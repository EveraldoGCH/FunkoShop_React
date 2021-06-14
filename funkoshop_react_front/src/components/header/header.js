import React from 'react';
import "../header/headerStyle.css"
import {Link} from "react-router-dom"

let Header = function(){
return (
    <div id="content">
    <header>
      <div id="pruebaflex">
      <Link to="/"><img key="100" className="logo" src="/images/LOGO2.png" alt='LOGO'/></Link>
   </div>
         </header>
     </div>
)}


export default Header
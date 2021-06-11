import React from 'react';
import {Link} from "react-router-dom"
import Header from "../header/header"

let Inicio = function(){
return (
    <>
    <Header/>
    <Link to="/products/"><h3>Productos</h3></Link>
    <Link to="/users/"><h3>Usuarios</h3></Link>
    </>
)}


export default Inicio
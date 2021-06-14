import React from 'react';
import {Link} from "react-router-dom"
import Header from "../header/header"

let Inicio = function(){
return (
    <>
    <Header/>
    <div className="flexinicio">
    <Link to="/products/"><h3 className="inicioparrafo">Productos</h3></Link>
    <Link to="/users/"><h3 className="inicioparrafo">Usuarios</h3></Link>
    </div>
    </>
)}


export default Inicio
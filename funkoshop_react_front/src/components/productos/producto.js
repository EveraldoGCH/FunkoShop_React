import React from 'react';
import Header from "../header/header"

function Producto(props){
return (
<>
    <Header/>
    <div className="divprecioimg">
        <img src="/public/"{...props.img} alt={props.titulo}/>
        <h4 className="nombreproducto">{props.titulo}</h4>
        <p className="descripcionproducto">{props.descripcion}</p>
        <p className="precioproducto">{props.precio}</p>
    </div>
</>
)}


export default Producto
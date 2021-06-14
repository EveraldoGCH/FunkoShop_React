import React from 'react';
import { Link } from 'react-router-dom';

function Producto(props){
return (
<>
    <div className="productos" key={props.id}>
        <Link to={"/productsdetail/"+props.id}><article className="producto">
        <img src={"/images/"+props.img} alt={props.titulo}/>
        <div className="divprecioimg">
           <h4 className="nombreproducto">{props.titulo}</h4>
           <p className="descripcionproducto">{props.descripcion}</p>
           <p className="precioproducto">precio:ARS$ {props.precio}</p>
        </div>
        </article></Link>
    </div>
</>
)}


export default Producto
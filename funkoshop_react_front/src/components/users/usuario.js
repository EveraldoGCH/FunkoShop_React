import React from 'react';

function Detalle(props){
return (
<div>
<section className="padre768px" key={props.id}>
    <div className="padreFlexDetalleProducto">
        <img src={"/images/profile_pics/"+props.img} alt={props.nombre}/>
    </div>
    <div className="contenedorprecio">
        <h2 className="nombreproducto">
        {props.nombre}
        </h2>
        <h4 className="descripcionproducto">
        {props.email}
        </h4>
        <h5 className="precioproducto">
        ID: {props.id}
        </h5>
    </div>
</section>
</div>
)}


export default Detalle
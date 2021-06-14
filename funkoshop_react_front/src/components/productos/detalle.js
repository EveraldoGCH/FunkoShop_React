import React from 'react';

function Detalle(props){
return (
<div>
<section className="padre768px" key={props.id}>
    <div className="padreFlexDetalleProducto">
        <img src={"/images/"+props.img} alt={props.titulo}/>
    </div>
    <div className="contenedorprecio">
        <h2 className="nombreproducto">
        {props.titulo}
        </h2>
        <h4 className="descripcionproducto">
        {props.descripcion}
        </h4>
        <h5 className="precioproducto">
        precioARS$: {props.precio}
        </h5>
    </div>
</section>
</div>
)}


export default Detalle
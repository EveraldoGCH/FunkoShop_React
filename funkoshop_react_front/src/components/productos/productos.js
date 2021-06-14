
import React, {Component} from 'react';
import Header from "../header/header"
import fetch from "node-fetch"
import Producto from "./producto"

class Productos extends Component{
        state = {
            data: [],
          }
    
    componentDidMount() {
        fetch('/products/lista', { credentials: "include",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }})
          .then(response => response.json())
          .then(data => {
              console.log(data.data)
              data = data.data
              this.setState({ data })
            })
          }
    render() {
        return(
            <>
            <Header />
        {this.state.data.map((producto) => (
          <Producto
            img={producto.image_product}
            titulo={producto.name_product}
            descripcion={producto.product_description}
            precio={producto.price}
            id={producto.id_product}
          />
        ))}
            </>
        )
    }}




export default Productos
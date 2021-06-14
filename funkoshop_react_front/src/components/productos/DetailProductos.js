
import React, {Component} from 'react';
import Header from "../header/header"
import fetch from "node-fetch"
import Detalle from "./detalle"

class DetailProductos extends Component{
  constructor(){
    super();
    this.state={
      data:[],
      datadetail:[]
    }
  }

  componentDidMount() {
      
    console.log("me momente");
      fetch('/products/lista', { credentials: "include",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }})
        .then(response => response.json())
        .then(data => {
            data = data.data
            this.setState({ data:data })
            console.log(data)
            this.setState({datadetail: data.find(funko=>funko.id_product==this.props.match.params.id)})
            console.log(this.state.datadetail.id_product)

          })
        }

  render(){
    return(
<>
<Header/>
          <Detalle
            img={this.state.datadetail.image_product}
            titulo={this.state.datadetail.name_product}
            descripcion={this.state.datadetail.product_description}
            precio={this.state.datadetail.price}
            id={this.state.datadetail.id_product}
          />
        
            </>
        )
    }}

export default DetailProductos
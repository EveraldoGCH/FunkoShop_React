
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
          } })
        .catch(console.log("no LLego JSON"))
          .then(response => response.json())
          .catch(console.log("error1 no hay un JSON"))
          .then(data => this.setState({ data })
          .catch(console.log("error2")));
    }
    render() {
        return(
            <>
            console.log({this.state.data})
            <Header/>
            <p>porductoooooos todos</p>
            </>
        )
    }}




export default Productos
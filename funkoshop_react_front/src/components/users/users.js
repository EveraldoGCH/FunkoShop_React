
import React, {Component} from 'react';
import Header from "../header/header"
import fetch from "node-fetch"
import Usuario from "./usuario"

class Users extends Component{
  constructor(){
    super();
    this.state={
      data:[],
    }
  }

  componentDidMount() {
      
    console.log("me momente");
      fetch('/users', { credentials: "include",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }})
        .then(response => response.json())
        .then(data => {
            data = data.data
            this.setState({ data:data })
            console.log(data)
          })
        }

  render(){
    return(
<>
<Header/>
{this.state.data.map((usuario) => (
          <Usuario
          cantidad={this.state.data.length}
            img={usuario.profile_img}
            nombre={usuario.user_name}
            email={usuario.user_email}
            id={usuario.id_user}
          />
        ))}
        </>
        )
    }}

export default Users
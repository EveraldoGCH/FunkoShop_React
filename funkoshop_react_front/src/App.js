import './App.css';
//import Header from "./components/header/header"
import Users from "./components/users/users"
//import Error from "./components/error/error"
import Inicio from "./components/inicio/inicio"
import Productos from "./components/productos/productos"
import DetailProductos from "./components/productos/DetailProductos"
import {Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Route path="/" exact={true} component={Inicio} />
    <Route path="/users/" component={Users} />
    <Route path="/products/" component={Productos} />
    <Route path="/productsdetail/:id" component={DetailProductos} />
    </div>
  );
}
export default App;

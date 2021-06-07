import './App.css';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Users from "./components/users/users"
import Error from "./components/error/error"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Route path="/" component={Header} />
    <Route path="/users" component={Users} />
    <Route path="/" component={Footer} />
    </div>
  );
}
export default App;

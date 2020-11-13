import React, { useState } from "react";

import { useSelector } from "react-redux";
import useLocalStorage from "react-use-localstorage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
//componentes

import NavBar from "./components/NavBar";
import Homepage from "./components/Home";
import Login from "./components/Login.jsx";
import Faq from "./components/Faq";
import Catalogo from "./components/Catalogo/Catalogue";
import Producto from "./components/Catalogo/Product";
import Admin from "./components/Admin/admin";
import store from "./store";
import Carrito from "./components/Catalogo/ItemCarrito.jsx";
import NewUser from "./components/Forms/UserForm.jsx";

function App() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useLocalStorage("items", []);
  const user = useSelector((state) => state.user);

  const agregarCarrito = (producto) => {
    if (user !== "guest") {
      axios
        .post(`http://localhost:3000/users/${user.id}/cart`, {
          id: producto.id,
          price: producto.price,
        })
        .then(() => {
          setItems((oldItems) => [...oldItems, producto]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setItems((oldItems) => [...oldItems, producto]);
    }
  };

  return (
    <Router>
      <NavBar onCartClick={() => setShow((prevShow) => !prevShow)} />
      <Carrito cartShow={show} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          path="/catalogo"
          render={() => <Catalogo agregarCarrito={agregarCarrito} />}
        />
        <Route path="/faq" component={Faq} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => <Producto id={match.params.id} />}
        />
        <Route path="/ingresar" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/signup" component={NewUser} />
      </Switch>
    </Router>
  );
}

export default App;

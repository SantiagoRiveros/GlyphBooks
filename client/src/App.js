import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//componentes

import NavBar from "./components/NavBar";
import Homepage from "./components/Home";
import Login from "./components/Login.jsx";
import Faq from "./components/Faq";
import Catalogo from "./components/Catalogo/Catalogue";
import Producto from "./components/Catalogo/Product";
import Admin from "./components/Admin/admin";
import Carrito from "./components/Carrito/Carrito.jsx";
import NewUser from "./components/Forms/UserForm.jsx";
import ResetPassword from "./components/ResetPassword";

function App(props) {
  const [show, setShow] = useState(false);

  return (
    <Router>
      <NavBar onCartClick={() => setShow((prevShow) => !prevShow)} />
      <Carrito cartShow={show} items={props.carrito.cart.items} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/catalogo" render={() => <Catalogo />} />
        <Route path="/faq" component={Faq} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => <Producto id={match.params.id} />}
        />
        <Route path="/ingresar" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/signup" component={NewUser} />
        <Route path="/password" component={ResetPassword} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    carrito: state,
  };
};

export default connect(mapStateToProps)(App);

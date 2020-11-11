import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//componentes

import NavBar from "./components/NavBar";
import Homepage from "./components/Home";
import Login from "./components/Login.jsx";
import Faq from "./components/Faq";
import Catalogo from "./components/Catalogo/Catalogue";
import Producto from "./components/Catalogo/Product";
import Admin from "./components/Admin/admin";
import store from "./store";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
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
          <Route path="/carrito" />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;

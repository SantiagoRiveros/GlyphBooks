import React, { useState } from 'react';
import './CSS/navbar.css';
import { BrowserRouter as Router, Switch ,Route ,Link } from "react-router-dom";
//componentes
import NavBar from "./components/NavBar.jsx"
import Homepage from "./routing/Home.jsx"
import Carrito from "./routing/Carrito.jsx"
import Ingresar from "./routing/Ingresar.jsx"
import Faq from "./routing/Faq.jsx"
import Catalogo from "./routing/Catalogo.jsx"

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/catalogo" component={Catalogo}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/ingresar" component={Ingresar}/>
          <Route path="/carrito" component={Carrito}/>
        </Switch>
      </div>
    </Router>

  )
}

export default App;

import React, { useState } from 'react';

import { BrowserRouter as Router, Switch ,Route ,Link } from "react-router-dom";
//componentes
import NavBar from "./Components/NavBar.jsx"
import Homepage from "./Components/Home.jsx"
import Carrito from "./routing/Carrito.jsx"
import Ingresar from "./routing/Ingresar.jsx"
import Faq from "./routing/faq.jsx"
import Catalogo from "./Components/Catalogo/Catalogue.jsx"

function App() {
  return (
    <Router>
          <Route path='/' component={NavBar}/>
          <Route exact path="/" component={Homepage}/>
          <Route path="/catalogo" component={Catalogo}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/ingresar" component={Ingresar}/>
          <Route path="/carrito" component={Carrito}/>
    </Router>

  )
}

export default App;

import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//componentes
import NavBar from "./Components/NavBar.jsx";
import Homepage from "./Components/Home.jsx";
import Carrito from "./routing/Carrito.jsx";
import Ingresar from "./routing/Ingresar.jsx";
import Faq from "./routing/faq.jsx";
import Catalogo from "./Components/Catalogo/Catalogue";
import Crud from "./Components/Forms/CrudProductForm";

function App() {
  const [producto, setProducto] = useState(null);

  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Homepage} />
      <Route
        path="/catalogo"
        render={() => <Catalogo setProducto={setProducto} />}
      />
      <Route path="/faq" component={Faq} />
      <Route path="/ingresar" component={Ingresar} />
      <Route path="/carrito" component={Carrito} />
      <Route path="/crud" render={() => <Crud product={producto} />} />
    </Router>
  );
}

export default App;

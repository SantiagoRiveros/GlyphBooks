import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//componentes

import NavBar from "./components/NavBar";
import Homepage from "./components/Home";
import Carrito from "./routing/Carrito";
import Ingresar from "./routing/Ingresar";
import Faq from "./routing/faq.jsx";
import Catalogo from "./components/Catalogo/Catalogue";
import Crud from "./components/Forms/CrudProductForm";
import newCategory from "./components/Forms/NewCategoryForm";
import AddCategory from "./components/Forms/CategorySelector";

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
      <Route
        path="/crud"
        render={() => <Crud product={producto} setProduct={setProducto} />}
      />
      <Route path="/newCategory" component={newCategory} />
      <Route
        path="/addCategory"
        render={() => (
          <AddCategory producto={producto} setProducto={setProducto} />
        )}
      />
    </Router>
  );
}

export default App;

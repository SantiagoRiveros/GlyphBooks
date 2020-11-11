import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
//componentes

import NavBar from "./Components/NavBar";
import Homepage from "./Components/Home";
import Carrito from "./routing/Carrito";
import Ingresar from "./routing/Ingresar";
import Faq from "./routing/Faq.jsx";
import AddCategory from "./Components/Forms/CategorySelector";
import Catalogo from "./Components/Catalogo/Catalogue";
import Crud from "./Components/Forms/CrudProductForm";
import newCategory from "./Components/Forms/NewCategoryForm";
import Producto from "./Components/Catalogo/Product";


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
      <Route
        exact
        path="/products/:id"
        render={({ match }) => <Producto id={match.params.id} />}
      />
      <Route path="/ingresar" component={Ingresar} />
      <Route path="/carrito" component={Carrito} />
      <Route
        path="/crud"
        render={() => <Crud product={producto} setProduct={setProducto} />}
      />
      <Route path="/newCategory" component={newCategory} />
    </Router>
  );
}

export default App;

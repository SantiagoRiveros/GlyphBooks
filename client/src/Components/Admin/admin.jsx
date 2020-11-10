import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Crud from "../Forms/CrudProductForm";
import AdminProducts from "./adminProducts";

export default function Admin() {
  const [producto, setProducto] = useState(null);
  return (
    <Switch>
      <Route
        path="/admin/products"
        render={() => <AdminProducts setProducto={setProducto} />}
      />
      <Route
        path="/admin/crud"
        render={() => <Crud product={producto} setProduct={setProducto} />}
      />
    </Switch>
  );
}

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Crud from "../Forms/CrudProductForm";
import AdminProducts from "./adminProducts";
import OrderTable from "./orderTable.jsx";
import AdminUsers from "./adminUsers.jsx";
import AdmSideBar from "./admSideBar.jsx";

export default function Admin() {
  const [producto, setProducto] = useState(null);
  return (
    <div className="admin">
      <AdmSideBar />
      <Switch>
        <Route path="/admin/orders" render={() => <OrderTable />} />
        <Route path="/admin/users" render={() => <AdminUsers />} />
        <Route
          path="/admin/products"
          render={() => <AdminProducts setProducto={setProducto} />}
        />
        <Route
          path="/admin/crud"
          render={() => <Crud product={producto} setProduct={setProducto} />}
        />
      </Switch>
    </div>
  );
}

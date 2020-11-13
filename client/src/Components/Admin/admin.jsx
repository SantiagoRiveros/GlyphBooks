import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Crud from "../Forms/CrudProductForm";
import AdminProduct from "./adminProduct";
import OrderTable from "./orderTable.jsx";
import AdminUsers from "./adminUsers.jsx";
import AdmSideBar from "./admSideBar.jsx";
import style from "../../CSS/adminProducts.module.scss";

export default function Admin() {
  const [producto, setProducto] = useState(null);
  return (
    <div className={style.admin}>
      <AdmSideBar />
      <Switch>
        <Route path="/admin/orders" render={() => <OrderTable />} />
        <Route path="/admin/users" render={() => <AdminUsers />} />
        <Route
          path="/admin/products"
          render={() => <AdminProduct setProducto={setProducto} />}
        />
        <Route
          path="/admin/crud"
          render={() => <Crud product={producto} setProduct={setProducto} />}
        />
      </Switch>
    </div>
  );
}

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Crud from "../Forms/CrudProductForm";
import NewCategory from "../Forms/NewCategoryForm";
import AdminProduct from "./adminProduct";
import OrderTable from "./orderTable.jsx";
import AdminUsers from "./adminUsers.jsx";
import AdmSideBar from "./admSideBar.jsx";
import style from "../../CSS/Admin/admin.module.scss";

export default function Admin() {
  const [producto, setProducto] = useState(null);
  return (
    <div className={style.fondo}>
      <AdmSideBar />
      <div className={style.relleno}>
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
        <Route path="/admin/newCategory" render={() => <NewCategory />} />
      </Switch>
      </div>
    </div>
  );
}

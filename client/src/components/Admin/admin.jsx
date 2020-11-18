import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Crud from "../Forms/CrudProductForm";
import NewCategory from "../Forms/NewCategoryForm";
import AdminProduct from "./adminProduct";
import OrderTable from "./orderTable.jsx";
import AdminUsers from "./adminUsers.jsx";
import AdmSideBar from "./admSideBar.jsx";
import AdminReviews from "./adminReviews.jsx";
import ProductCrud from "../Forms/CrudProductForm";
import ReviewCrud from "../Forms/CrudReviewForm";
import RevCrud from "../Forms/CrudProductForm";
import style from "../../CSS/Admin/admin.module.scss";

export default function Admin() {
  const [producto, setProducto] = useState(null);
  const [review, setReview] = useState(null);
  return (
    <div className={style.fondo}>
      <AdmSideBar />
      <div className={style.relleno}>
      <Switch>
        <Route path="/admin/orders" render={() => <OrderTable />} />
        <Route path="/admin/users" render={() => <AdminUsers />} />
        <Route path="/admin/reviews" render={() => <AdminReviews />} />
        <Route path="/admin/crud" render={() => <ProductCrud />} />
        <Route path="/admin/reviewcrud" render={() => <ReviewCrud />} />
        <Route
          path="/admin/products"
          render={() => <AdminProduct setProducto={setProducto} />}
        />
        <Route
          path="/admin/crud"
          render={() => <Crud product={producto} setProduct={setProducto} />}
        />
        <Route
          path="/admin/reviewcrud"
          render={() => <RevCrud review={review} setReview={setReview} />}
        />
        <Route path="/admin/newCategory" render={() => <NewCategory />} />
      </Switch>
      </div>
    </div>
  );
}

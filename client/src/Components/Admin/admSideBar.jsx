import React from "react";
import { useHistory } from "react-router-dom";

export default function AdmSideBar() {
  const { push } = useHistory();
  return (
    <div>
      <ul>
        <li OnClick={() => push(`/admin/products`)}>Productos</li>
        <li OnClick={() => push(`/admin/orders`)}> Ordenes</li>
        <li OnClick={() => push(`/admin/users`)}>Usuarios</li>
      </ul>
    </div>
  );
}

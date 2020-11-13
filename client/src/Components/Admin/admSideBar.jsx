import React from "react";
import { useHistory } from "react-router-dom";

export default function AdmSideBar() {
  const { push } = useHistory();
  return (
    <div>
      <ul>
        <li onClick={() => push(`/admin/products`)}>Productos</li>
        <li onClick={() => push(`/admin/orders`)}> Ordenes</li>
        <li onClick={() => push(`/admin/users`)}>Usuarios</li>
      </ul>
    </div>
  );
}

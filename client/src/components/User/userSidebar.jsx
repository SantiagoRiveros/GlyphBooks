import React from "react";
import { useHistory } from "react-router-dom";

export default function userSidebar({ user }) {
  const { push } = useHistory();

  return (
    <div>
      <h1>{user.firstName + " " + user.lastName}</h1>
      <ul>
        <li onClick={() => push(`/me/details`)}>DETALLES</li>
        <li onClick={() => push(`/me/orders`)}>COMPRAS</li>
        {user.isAdmin && <li onClick={() => push(`/admin`)}>ADMIN</li>}
        <li>Logout</li>
      </ul>
    </div>
  );
}

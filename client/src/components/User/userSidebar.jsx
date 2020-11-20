import React from "react";
import { useHistory } from "react-router-dom";

export default function UserSidebar({ user, logOut }) {
  const { push } = useHistory();

  return (
    <div>
      <h1>{user.firstName + " " + user.lastName}</h1>
      <ul>
        <li onClick={() => push(`/cuenta/details`)}>DETALLES</li>
        <li onClick={() => push(`/cuenta/orders`)}>COMPRAS</li>
        {user.isAdmin && <li onClick={() => push(`/admin`)}>ADMIN</li>}
        <li>
          <button onClick={logOut}>LogOut</button>
        </li>
      </ul>
    </div>
  );
}

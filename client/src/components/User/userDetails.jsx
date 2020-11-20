import React from "react";

export default function userDetails({ user }) {
  return (
    <div>
      <ul>
        <li>Nombre:{user.firstName}</li>
        <li>Apellido:{user.lastName}</li>
        <li>Email:{user.email}</li>
        <li>Direccion:{user.shippingAdress}</li>
        {user.isAdmin && <li>Rol: Admin</li>}
        {!user.isAdmin && <li>Rol: Usuario</li>}
        <li>Cambiar Contraseña</li>
      </ul>
    </div>
  );
}

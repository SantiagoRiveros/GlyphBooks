import React from "react";

export default function UserDetails({ user }) {
  return (
    <div>
      <ul>
        <li>Nombre:{user.firstName}</li>
        <li>Apellido:{user.lastName}</li>
        <li>Email:{user.email}</li>
        <li>Direccion:{user.shippingAdress}</li>
        <li>Rol: {user.isAdmin ? "Admin" : "Usuario"}</li>
        <li>Cambiar Contraseña</li>
      </ul>
    </div>
  );
}

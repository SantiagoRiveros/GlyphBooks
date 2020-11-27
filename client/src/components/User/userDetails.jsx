import React from "react";
import style from "../../CSS/userDetails.module.scss";

export default function UserDetails({ user }) {
  return (
    <div className={style.container}>
      <table className={style.users}>
        <tr className={style.tr}>
          <th className={style.th}>Nombre</th>
          <th className={style.th}>Apellido</th>
          <th className={style.th}>Email</th>
          <th className={style.th}>Direccion</th>
          <th className={style.th}>Rol</th>
        </tr>
        <tr>
          <td className={style.td}>{user.firstName}</td>
          <td className={style.td}>{user.lastName}</td>
          <td className={style.td}>{user.email}</td>
          <td className={style.td}>{user.shippingAdress}</td>
          <td className={style.td}>{user.isAdmin ? "Admin" : "User"}</td>
        </tr>
      </table>
      <h2>Cambiar Contraseña</h2>
    </div>
  );
}

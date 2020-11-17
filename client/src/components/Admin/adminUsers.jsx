import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../CSS/Admin/adminUsers.module.scss";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div className={style.size}>
      <table className={style.users}>
        <tr className={style.tr}>
          <th className={style.th}>ID</th>
          <th className={style.th}>Nombre</th>
          <th className={style.th}>Email</th>
          <th className={style.th}>Rol</th>
          <th className={style.th}>Detalles</th>
        </tr>
        {users.length &&
          users.map((user) => (
            <tr className={style.tr}>
              <td className={style.td}>{user.id}</td>
              <td className={style.td}>{user.firstName + " " + user.lastName}</td>
              <td className={style.td}>{user.email}</td>
              <td className={style.td}>{user.isAdmin ? "Admin" : "User"}</td>
              <td className={style.td}>
                <button />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

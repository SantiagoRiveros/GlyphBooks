import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../CSS/Admin/adminUsers.module.scss";

export default function AdminUsers(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3000/users/${id}`);
    const { data } = await axios.get("http://localhost:3000/users");
    setUsers(data);
  }

  async function handleSetRole(id, rol) {
    await axios.put(`http://localhost:3000/users/${id}`, { isAdmin: !rol });
    const { data } = await axios.get("http://localhost:3000/users");
    setUsers(data);
  }

  return (
    <div className={style.size}>
      <table className={style.users}>
        <tr className={style.tr}>
          <th className={style.th}>ID</th>
          <th className={style.th}>Nombre</th>
          <th className={style.th}>Email</th>
          <th className={style.th}>Rol</th>
          <th className={style.th}>Eliminar</th>
        </tr>
        {users.length &&
          users.map((user) => (
            <tr className={style.tr}>
              <td className={style.td}>{user.id}</td>
              <td className={style.td}>
                {user.firstName + " " + user.lastName}
              </td>
              <td className={style.td}>{user.email}</td>
              <td className={style.td}>
                {user.isAdmin ? "Admin" : "User"}
                {Number(props.user.user?.id) !== Number(user.id) ? (
                  <button onClick={() => handleSetRole(user.id, user.isAdmin)}>
                    SetRole
                  </button>
                ) : null}
              </td>
              <td className={style.td}>
                {Number(props.user.user?.id) !== Number(user.id) ? (
                  <ion-icon
                    name="trash-outline"
                    onClick={() => handleDelete(user.id)}
                  >
                    Eliminar
                  </ion-icon>
                ) : null}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

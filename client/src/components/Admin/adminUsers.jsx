import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import style from "../../CSS/Admin/adminUsers.module.scss";

export default function AdminUsers(props) {
  const [users, setUsers] = useState([]);
  const { push } = useHistory();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const pageLimit = Math.ceil(users.count / 12);

  const handleSort = (e) => {
    let newOrder = JSON.stringify([[e.target.name, "ASC"]]);
    newOrder === sort && (newOrder = JSON.stringify([[e.target.name, "DESC"]]));
    setSort(newOrder);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/users?page${page}&order=${sort}`)
      .then(({ data }) => {
        setUsers(data);
      });
  }, [page, sort]);

  async function handleDelete(id) {
    await axios.delete(`${process.env.REACT_APP_API}/users/${id}`);
    const { data } = await axios.get(`${process.env.REACT_APP_API}/users`);
    setUsers(data);
  }

  async function handleSetRole(id, rol) {
    await axios.put(`${process.env.REACT_APP_API}/users/${id}`, {
      isAdmin: !rol,
    });
    const { data } = await axios.get(`${process.env.REACT_APP_API}/users`);
    setUsers(data);
  }

  return (
    <div className={style.size}>
      <table className={style.users}>
        <tr className={style.tr}>
          <th className={style.th}>
            ID <button name={"id"} onClick={handleSort}></button>
          </th>
          <th className={style.th}>
            Nombre <button name={"lastName"} onClick={handleSort}></button>
          </th>
          <th className={style.th}>
            Email <button name={"email"} onClick={handleSort}></button>
          </th>
          <th className={style.th}>
            Rol <button name={"isAdmin"} onClick={handleSort}></button>
          </th>
          <th className={style.th}>Detalles</th>

          <th className={style.th}>Eliminar</th>
        </tr>
        {users.count &&
          users.rows.map((user) => (
            <tr className={style.tr}>
              <td className={style.td}>{user.id}</td>
              <td className={style.td}>
                {user.firstName + " " + user.lastName}
              </td>
              <td className={style.td}>{user.email}</td>
              <td className={style.td}>
                {user.isAdmin ? "Admin" : "User"}
                {Number(props.user.user?.id) !== Number(user.id) ? (
                  <button
                    className={style.Btn}
                    onClick={() => handleSetRole(user.id, user.isAdmin)}
                  >
                    Cambiar
                  </button>
                ) : null}
              </td>
              <td>
                <button
                  className={style.Btn}
                  onClick={() => push(`/admin/userDetails/${user.id}`)}
                >
                  Detalles
                </button>
              </td>
              <td className={style.td}>
                {Number(props.user.user?.id) !== Number(user.id) ? (
                  <ion-icon
                    name="trash-outline"
                    color="var(--color-primary)"
                    color="var(--color-primary)"
                    onClick={() => handleDelete(user.id)}
                  >
                    Eliminar
                  </ion-icon>
                ) : null}
              </td>
            </tr>
          ))}
      </table>
      <button
        className={style.Btn}
        disabled={page === 1 || page === "1"}
        onClick={() => setPage(page - 1)}
      >
        Back
      </button>
      <button
        className={style.Btn}
        disabled={parseInt(page) === pageLimit}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

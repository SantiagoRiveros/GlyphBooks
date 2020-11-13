import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>ID:</th>
          <th>Nombre:</th>
          <th>Email:</th>
          <th>Rol:</th>
          <th>Detalles:</th>
        </tr>
        {users.length &&
          users.map((user) => (
            <tr>
              <th>{user.id}</th>
              <th>{user.firstName + " " + user.lastName}</th>
              <th>{user.email}</th>
              <th>{user.isAdmin ? "Admin" : "User"}</th>
              <th>
                <button />
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
}

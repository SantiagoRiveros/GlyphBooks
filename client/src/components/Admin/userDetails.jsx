import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function useQuery() {
  let url = useLocation();
  let result = url.pathname.split("/");
  let userID = result[result.length - 1];
  return userID;
}

export default function UserDetails() {
  const userID = useQuery();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userID}`)
      .then(({ data }) => {
        setUser(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>Nombre:{user.firstName}</h3>
      <h3>Apellido:{user.lastName}</h3>
      <h3>Email:{user.email}</h3>
      <h3>Direccion{user.shippingAdress}</h3>
      <h3>Rol: {user.isAdmin ? "Admin" : "User"}</h3>
    </div>
  );
}

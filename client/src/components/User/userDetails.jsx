import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserDetails({ user, setLocalUser, localUser }) {
  const [check, setCheck] = useState(false);
  const [input, setInput] = useState({ ...user });

  const handleSubmit = () => {
    axios
      .put(`http://localhost:3000/users/${user.id}`, input)
      .then(({ data }) => {
        setLocalUser({ ...localUser, user: data });
        setCheck(!check);
      });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <ul>
        <li>Nombre:{user.firstName}</li>
        <li>Apellido:{user.lastName}</li>
        <li>Email:{user.email}</li>
        <li>Direccion:{user.shippingAdress}</li>
        <li>Rol: {user.isAdmin ? "Admin" : "Usuario"}</li>
        <button onClick={() => setCheck(!check)}>Editar</button>
      </ul>
      {check && (
        <div>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={input.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={input.lastName}
          />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={input.email}
          />
          <input
            type="text"
            name="shippingAdress"
            onChange={handleChange}
            value={input.shippingAdress}
          />
          <button onClick={handleSubmit}>Hecho</button>
        </div>
      )}
    </div>
  );
}

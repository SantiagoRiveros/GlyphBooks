import React, { useState } from "react";
import axios from "axios";
import style from "../../CSS/newUser.module.scss";
import { useHistory } from "react-router-dom";

export default function NewForm() {
  const { push } = useHistory();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    shippingAdress: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    axios.post(`http://localhost:3000/users`, input).then(() => {
      push("/");
    });

    e.preventDefault();
  };

  return (
    <div>
      <form className={style.body} onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={input.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            value={input.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={input.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          Direccion:
          <input
            type="text"
            value={input.shippingAdress}
            name="shippingAdress"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Crear" />
      </form>
    </div>
  );
}

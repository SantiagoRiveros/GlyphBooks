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
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Nuevo usuario</h1>
        <div className={style.textbox}>
          <input
            type="text"
            value={input.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="Nombre"
          />
        </div>
        <div className={style.textbox}>
          <input
            type="text"
            value={input.lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="Apellido"
          />
          </div>
          <div className={style.textbox}>
          <input
            type="password"
            value={input.password}
            name="password"
            onChange={handleChange}
            placeholder="Constraseña"
          />
          </div>
          <div className={style.textbox}>
          <input
            type="text"
            value={input.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          </div>
          <div className={style.textbox}>
          <input
            type="text"
            value={input.shippingAdress}
            name="shippingAdress"
            onChange={handleChange}
            placeholder="Direccion"
          />
          </div>
          <input
          type="button"
          className={style.btn}
          value="Crear cuenta"
        />
    </div>
    </div>
  );
}

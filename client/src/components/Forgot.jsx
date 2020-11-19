import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "../CSS/login.module.scss";

export default function Forgot() {
  const [input, setInput] = useState({ email: "" });
  const { user } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const handlePass = await axios.post(
      `http://localhost:3000/users/${user.user.email}/forgot`,
      {
        email: input.email,
      }
    );
  };

  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Olvidaste tu contraseña</h1>
        <div className={style.textbox}>
          <input
            name="email"
            type="email"
            placeholder="Ingresa tu Email"
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          onClick={handleSubmit}
          className={style.btn}
          value="Enviar"
        />
      </div>
    </div>
  );
}

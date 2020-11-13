import React, { useState } from "react";
import axios from "axios";
import style from "../CSS/login.module.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { push } = useHistory();
  const [input, setInput] = useState({ usuario: "", contraseña: "" });

  const handleSubmit = (e) => {
    axios.post(`http://localhost:3000/users`, input).then(() => {
      push("/");
    });
  };

  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Ingresar</h1>
        <div className={style.textbox}>
          <input value={input.usuario} type="text" placeholder="Email" />
        </div>
        <div className={style.textbox}>
          <input
            value={input.contraseña}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <input
          onClick={handleSubmit}
          type="button"
          className={style.btn}
          value="Ingresar"
        />
        <button onClick={() => push("/signup")} className={style.btn}>
          Crear cuenta
        </button>
      </div>
    </div>
  );
}

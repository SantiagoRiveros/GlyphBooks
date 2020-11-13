import React from "react";
import style from "../CSS/login.module.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { push } = useHistory();
  return (
    <div className={style.fondo}>
      <div className={style.loginbox}>
        <h1>Ingresar</h1>
        <div className={style.textbox}>
          <input type="text" placeholder="Usuario" />
        </div>
        <div className={style.textbox}>
          <input type="password" placeholder="Contraseña" />
        </div>
        <input type="button" className={style.btn} value="Ingresar" />
        <button onClick={() => push("/signup")} className={style.btn}>
          Crear cuenta
        </button>
      </div>
    </div>
  );
}
